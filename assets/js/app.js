import "katex/dist/katex.css";
import "highlight.js/styles/github.css";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";

import "../css/notosans.css";
import "@openfonts/source-code-pro_latin";

import "../css/markdown.css";

// font awesome
library.add(faHome, faTwitter, faFacebookF);
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

// adjust iframe size
window.addEventListener("message", (event) => {
	if(event.origin === "https://sysad.trap.show"){
		document.querySelector("#hyakkiyagyo").style.height = event.data + "px";
	}
});

// add link to image
document.querySelectorAll("article p > img, article .kg-image-card > img, article .kg-gallery-image > img").forEach((img) => {
	const link = document.createElement("a");
	link.target = "_blank";
	link.href = img.src;
	link.className = "orig-link";
	img.replaceWith(link);
	link.appendChild(img);
});
