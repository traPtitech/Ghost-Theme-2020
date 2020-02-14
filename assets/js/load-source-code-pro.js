const hashTable = webpackDefined.sourceCodeProHash;

const loadFont = (name, src, style, weight) => {
  const font = new FontFace(name, src, {
    style,
    weight
  })
  return font.load().then(() => {
    document.fonts.add(font)
  })
}

export const loadSourceCodePro = () => {
  const $article = document.querySelector('article');
  if (!$article) return;
  const $code = $article.querySelector('code');
  if (!$code) return;

  const weights = [2, 3, 4, 6, 9]; // available: [2, 3, 4, 5, 6, 7, 9]
  const styles = ['normal', 'italic'];

  weights.forEach(weight => styles.forEach(style => {
    const weightNumber = weight * 100;
    const suffix = style === 'italic' ? '-italic' : '';
    const baseFileName = `source-code-pro-latin-${weightNumber}${suffix}`;
    const hash = hashTable[`${baseFileName}.woff`];
    const hash2 = hashTable[`${baseFileName}.woff2`];

    return loadFont(
      'Source Code Pro',
      `
      url('/assets/built/fonts/${baseFileName}.${hash2}.woff2') format('woff2'),
      url('/assets/built/fonts/${baseFileName}.${hash}.woff') format('woff')
      `,
      style,
      weightNumber
    )
  }))
}
