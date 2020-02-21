const got = require('got')
const postcss = require('postcss')
const hbs = require('handlebars')
const { createWriteStream, promises: fs } = require('fs')
const stream = require('stream')
const path = require('path')
const { promisify } = require('util')

const FONT_CSS_URL = 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,700&display=swap&subset=japanese'

const pipeline = promisify(stream.pipeline);

const hexToChar = hex => String.fromCharCode(parseInt(hex, 16))
const parseRange = range => {
  return range
    .split(',')
    .map(condition => condition.trim())
    .map(condition => {
      if (!condition.includes('-')) return hexToChar(condition.replace(/^U\+/, ''))
      const [start, end] = condition.split('-')
      return [
        hexToChar(start.replace(/^U\+/, '')),
        hexToChar(end)
      ]
    })
}

const getFontsInfo = async () => {
  const res = await got(FONT_CSS_URL, {
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.4100.0 Safari/537.36'
    }
  })

  const css = postcss.parse(res.body)
  const atRuleNodes = []
  css.walkAtRules('font-face', atRule => { atRuleNodes.push(atRule.nodes) })

  return atRuleNodes.map(nodes => {
    const range = nodes.find(node => node.prop === 'unicode-range').value
    return {
      family: nodes.find(node => node.prop === 'font-family').value,
      weight: nodes.find(node => node.prop === 'font-weight').value,
      src: nodes.find(node => node.prop === 'src').value,
      range,
      conditions: parseRange(range)
    }
  })
}

const getCharsFromPage = async pagePath => {
  const defaultPage = await fs.readFile(pagePath, 'utf-8')
  const texts = hbs.parse(defaultPage).body.map(statement => statement.value).filter(value => !!value)
  const chars = new Set()
  texts.flatMap(text => [...text]).forEach(char => chars.add(char))
  return chars
}

const getDefaultChars = () => {
  const chars = new Set()
  const a = 0x3041 // あ
  const n = 0x3093 // ん
  for (let i = a; i <= n; i++) {
    chars.add(String.fromCharCode(i))
  }

  chars.delete('ゎ')
  chars.delete('ゐ')
  chars.delete('ゑ')
  return chars
}

const matchesConditions = (char, conditions) => {
  for (const condition of conditions) {
    if (Array.isArray(condition)) {
      if (condition[0] <= char && char <= condition[1]) {
        return true
      }
    } else {
      if (condition === char) return true
    }
  }
}

const fontIncludesChar = (font, chars) => {
  for (const char of chars) {
    if (matchesConditions(char, font.conditions)) return true
  }
  return false
}

const getUrlFromSrc = src => {
  const m = src.match(/url\((http.+\.woff2)\)/)
  if (!m[1]) throw new Error('Failed to parse src: ', src)
  return m[1]
}

const generateFilename = (font, critical) => {
  const i = getUrlFromSrc(font.src).match(/\.(\d+)\.woff/)
  if (!i[1]) throw new Error('Failed to get index name: ', url)
  return `${critical ? 'crit-' : ''}${font.family.replace(/[' ]/g, '')}${font.weight}${i[1]}.woff2`
}

const downloadToTmp = async (url, filename) => {
  try {
    await fs.mkdir('./assets/css/tmp')
  } catch (e) {}

  await pipeline(
    got.stream(url),
    createWriteStream(path.join('./assets/css/tmp', filename))
  );
}

const generateFontFace = (font, filename) => {
  const src = font.src.replace(/url\(http.+\.woff2\)/, `url('./${filename}')`)
  return `
    @font-face {
      font-family: ${font.family};
      font-style: normal;
      font-weight: ${font.weight};
      font-display: swap;
      src: ${src};
      unicode-range: ${font.range};
    }
  `
}

;(async () => {
  const [
    fonts,
    defaultSrcChars,
    homeChars,
    postChars
  ] = await Promise.all([
    getFontsInfo(),
    getCharsFromPage('./default.src.hbs'),
    getCharsFromPage('./home.hbs'),
    getCharsFromPage('./post.hbs')
  ])

  const defaultChars = getDefaultChars();

  const chars = new Set([
    ...defaultSrcChars,
    ...homeChars,
    ...postChars,
    ...defaultChars
  ])

  try {
    await fs.rmdir('./tmp', { recursive: true })
  } catch (e) {}

  let cssText = ''
  let criticalCssText = ''
  const promises = []
  for (const font of fonts) {
    const isCritical = font.weight === '400' && fontIncludesChar(font, chars)
    const filename = generateFilename(font, isCritical)
    const fontFaceText = generateFontFace(font, filename)

    promises.push(downloadToTmp(getUrlFromSrc(font.src), filename))

    if (isCritical) {
      criticalCssText += fontFaceText
    } else {
      cssText += fontFaceText
    }
  }

  promises.push(fs.writeFile('./assets/css/tmp/noto.css', cssText, 'utf-8'))
  promises.push(fs.writeFile('./assets/css/tmp/noto-critical.css', criticalCssText, 'utf-8'))

  await promises

  console.log('Output font files')
})()
