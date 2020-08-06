const loadShares = () => {
  const twitter = document.createElement('script');
  twitter.async = true;
  twitter.src = 'https://platform.twitter.com/widgets.js'
  twitter.charset = 'utf-8'
  document.head.appendChild(twitter)

  const hatena = document.createElement('script');
  hatena.async = true;
  hatena.src = 'https://b.st-hatena.com/js/bookmark_button.js'
  hatena.charset = 'utf-8'
  document.head.appendChild(hatena)

  const fb = document.createElement('script');
  fb.async = true;
  fb.defer = true;
  fb.crossOrigin = 'anonymous'
  fb.src = 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v5.0'
  document.head.appendChild(db)
}

export const loadSharesOnShow = () => {
  new IntersectionObserver((entries, observer) => {
    loadShares()
    observer.disconnect()
  }, {
    root: document.body,
    rootMargin: '20px'
  })
}
