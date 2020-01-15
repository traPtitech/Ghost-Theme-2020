import "normalize.css";
import "katex/dist/katex.css";
import "highlight.js/styles/github.css";
import "font-awesome/css/font-awesome.css";

import "typeface-notosans-jp";
import "typeface-source-code-pro";

import "../css/style.css";
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
document.querySelectorAll("article p > img").forEach((img) => {
	const link = document.createElement("a");
	link.target = "_blank";
	link.href = `${img.src}?original=1`;
	link.className = "orig-link";
	img.replaceWith(link);
	link.appendChild(img);
});
