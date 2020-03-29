const loadTwitter = () => {
  window.removeEventListener('scroll', loadTwitter)
  window.removeEventListener('click', loadTwitter)
  window.removeEventListener('touchstart', loadTwitter)

  const twitter = document.createElement('script');
  twitter.async = true;
  twitter.src = 'https://platform.twitter.com/widgets.js'
  twitter.charset = 'utf-8'
  document.head.appendChild(twitter)
}

export const loadTwitterOnScrollOrTouch = () => {
  window.addEventListener('scroll', loadTwitter)
  window.addEventListener('click', loadTwitter)
  window.addEventListener('touchstart', loadTwitter)
}
