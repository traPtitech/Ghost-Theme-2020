import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import '../css/style.scss';

// font awesome
library.add(faHome, faEnvelope, faTwitter, faFacebookF);
if (document.readyState !== 'loading') {
	dom.i2svg();
} else {
	window.addEventListener("DOMContentLoaded", () => {
		dom.i2svg();
	})
}

// fill copyright year
window.addEventListener("load", () => {
	document.querySelector(".copy span").textContent = new Date().getFullYear();
});

const $hyakkiyagyo = document.querySelector("#hyakkiyagyo")
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

// add link to image
document.querySelectorAll("article p > img, article .kg-image-card > img, article .kg-gallery-image > img").forEach((img) => {
	const link = document.createElement("a");
	link.target = "_blank";
	link.href = img.src;
	link.className = "orig-link";
	img.replaceWith(link);
	link.appendChild(img);
});
