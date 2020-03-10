const convertRemToPx = rem => {
  const fontSize = getComputedStyle(document.documentElement).fontSize;
  return rem * parseFloat(fontSize);
}

export const setupHeaderThinToggle = () => {
  const topPx = convertRemToPx(6)
  const interval = 100;
  const $header = document.getElementsByTagName('header')[0]
  let lastTime = Date.now() - interval

  window.addEventListener('scroll', () => {
    if (Date.now() < (lastTime + interval)) return
    lastTime = Date.now();

    if (document.body.scrollTop > topPx || document.documentElement.scrollTop > topPx) {
      $header.classList.add('thin')
    } else {
      $header.classList.remove('thin')
    }
  });
};
