import { throttle } from 'throttle-debounce';

const convertRemToPx = rem => {
  const fontSize = getComputedStyle(document.documentElement).fontSize;
  return rem * parseFloat(fontSize);
}

export const setupHeaderThinToggle = () => {
  const topPx = convertRemToPx(6);
  const thinTopPx = convertRemToPx(3.5);
  const $header = document.getElementsByTagName('header')[0];

  window.addEventListener('scroll', throttle(100, () => {
    if (document.body.scrollTop > topPx || document.documentElement.scrollTop > topPx) {
      $header.classList.add('thin')
    } else if (document.body.scrollTop < thinTopPx && document.documentElement.scrollTop < thinTopPx) {
      $header.classList.remove('thin')
    }
  }));
};
