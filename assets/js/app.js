import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHome, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import lozad from 'lozad';

import { setupCarousel } from './carousel';
import { setupHeaderThinToggle } from './header-thin-toggle';
import { setupHyakkiyagyo } from './hyakkiyagyo';
import { addLinkToImage } from './add-link-to-image';
import { setupWebshare } from './web-share';

import '../css/style.scss';

library.add(faHome, faShareAlt, faTwitter, faFacebookF, faYoutube);

const onLoad = () => {
	// prepare article imgs for lazyload
	const $postHead = document.querySelector('.post-head')
	if ($postHead) {
		document.querySelector('article').querySelectorAll('img[src], video[src], iframe[src]').forEach($media => {
			$media.dataset.src = $media.src
			$media.removeAttribute('src')
			$media.classList.add('lozad')
		})
	}

	// lazyload
	const observer = lozad();
	observer.observe();

	// font awesome
	dom.i2svg();

	// top page carousel
	setupCarousel();

	// fixed header
	setupHeaderThinToggle();

	setupHyakkiyagyo();

	addLinkToImage();

	setupWebshare();

	// fill copyright year
	document.querySelector(".copy span").textContent = new Date().getFullYear();
}

if (document.readyState !== 'loading') {
	onLoad()
} else {
	window.addEventListener("DOMContentLoaded", onLoad)
}
