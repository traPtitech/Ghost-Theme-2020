import lozad from 'lozad';

import { setupCarousel } from './carousel';
import { setupHeaderThinToggle } from './header-thin-toggle';
import { setupHyakkiyagyo } from './hyakkiyagyo';
import { addLinkToImage } from './add-link-to-image';
import { setupWebshare } from './web-share';
import { loadTwitterOnScrollOrTouch } from './load-twitter';
import { loadSharesOnShow } from './load-shares';
import { loadIcon } from './load-icon';

import '../scss/style.scss';

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

	// top page carousel
	setupCarousel(); // lazyload used inside so lazyload should not be before here

	// lazyload
	const observer = lozad();
	observer.observe();

	// font awesome
	loadIcon();


	// fixed header
	setupHeaderThinToggle();

	setupHyakkiyagyo();

	addLinkToImage();

	setupWebshare();

	const $twitter = document.querySelector('#lazy-load-twitter')
	if ($twitter) {
		loadTwitterOnScrollOrTouch();
	}

	const $share = document.querySelector('#share')
	if ($share) {
		loadSharesOnShow($share);
	}

	// fill copyright year
	document.querySelector(".copy span").textContent = new Date().getFullYear();
}

if (document.readyState !== 'loading') {
	onLoad()
} else {
	window.addEventListener("DOMContentLoaded", onLoad)
}
