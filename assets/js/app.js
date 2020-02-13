import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHome, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import lozad from 'lozad';
import Swiper from 'swiper';

import '../css/style.scss';

library.add(faHome, faShareAlt, faEnvelope, faTwitter, faFacebookF);

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
	const $featured = document.querySelector('#featured')
	if ($featured) {
		const swiper = new Swiper($featured, {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 0,
			centeredSlides : true,
			pagination: '.swiper-pagination',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			breakpoints: {
				600: {
					slidesPerView: 2,
					spaceBetween: 10,
				}
			}
		})
	}

	// fill copyright year
	document.querySelector(".copy span").textContent = new Date().getFullYear();

	const $hyakkiyagyo = document.querySelector("#hyakkiyagyo")
	if ($hyakkiyagyo) {
		const hyakkiyagyoOrigin = "https://sysad.trap.show"

		// adjust iframe size
		window.addEventListener("message", (event) => {
			if(event.origin === hyakkiyagyoOrigin){
				$hyakkiyagyo.style.height = event.data + "px";
			}
		});

		// send css path to hyakkiyagyo
		$hyakkiyagyo.addEventListener("load", () => {
			$hyakkiyagyo.contentWindow.postMessage(
				document.querySelector("link[rel=stylesheet][href*=\\/app]").href,
				hyakkiyagyoOrigin
			)
		})
	}

	// add link to image
	document.querySelectorAll("article p > img, article .kg-image-card > img, article .kg-gallery-image > img").forEach($img => {
		const $link = document.createElement("a");
		$link.target = "_blank";
		$link.href = $img.src || $img.dataset.src;
		$link.className = "orig-link";
		$img.replaceWith($link);
		$link.appendChild($img);
	});

	// web share
	const $share = document.querySelector("#web-share")
	if ($share) {
		if (navigator.share) {
			$share.classList.remove("disabled")
			$share.addEventListener("click", () => {
				navigator.share({
					title: document.title,
					url: location.href,
				}).catch(e => {
					console.error("failed to share", e);
				})
			})
		}
	}
}

if (document.readyState !== 'loading') {
	onLoad()
} else {
	window.addEventListener("DOMContentLoaded", onLoad)
}
