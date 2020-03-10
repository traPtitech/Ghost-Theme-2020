import throttle from 'lodash.throttle';

const convertRemToPx = rem => {
  const fontSize = getComputedStyle(document.documentElement).fontSize;
  return rem * parseFloat(fontSize);
}

export const setupHeaderThinToggle = () => {
  const topPx = convertRemToPx(6);
  const $header = document.getElementsByTagName('header')[0];

  window.addEventListener('scroll', throttle(() => {
    if (document.body.scrollTop > topPx || document.documentElement.scrollTop > topPx) {
      $header.classList.add('thin')
    } else {
      $header.classList.remove('thin')
    }
  }, 100, { trailing: true }));
};
