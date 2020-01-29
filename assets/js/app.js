import "katex/dist/katex.css";
import "highlight.js/styles/github.css";
import "font-awesome/css/font-awesome.css";

import "../css/notosans.css";
import "@openfonts/source-code-pro_latin";

import "../css/markdown.css";

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
