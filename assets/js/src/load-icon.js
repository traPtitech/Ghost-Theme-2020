import { faExclamationTriangle, faHome, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';

const iconData = [
  faHome,
  faShareAlt,
  faTwitter,
  faFacebookF,
  faYoutube,
  faExclamationTriangle
]

const dataToSvg = (data, oldClass) => {
  const [width, height, , , path] = data.icon
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="${oldClass}" focusable="false" role="img" width="1.13em" height="1em" viewBox="0 0 ${width} ${height}"><path d="${path}" fill="currentColor" /></svg>`
  return svg
}

export const loadIcon = () => {
  document.querySelectorAll('.icon-fa').forEach($icon => {
    const name = $icon.getAttribute('data-name')
    const data = iconData.find(datum => datum.iconName === name)
    if (data) {
      const oldClass = $icon.className
      $icon.outerHTML = dataToSvg(data, oldClass)
    }
  })
}
