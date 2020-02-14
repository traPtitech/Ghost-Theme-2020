export const addLinkToImage = () => {
	document.querySelectorAll(
		"article p > img, article .kg-image-card > img, article .kg-gallery-image > img"
	).forEach($img => {
		const $link = document.createElement("a");
		$link.target = "_blank";
		$link.href = $img.src || $img.dataset.src;
		$link.className = "orig-link";
		$img.replaceWith($link);
		$link.appendChild($img);
	});
};
