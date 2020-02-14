export const setupWebshare = () => {
	const $share = document.querySelector("#web-share")
	if (!$share) return;
	if (!navigator.share) return;

	$share.classList.remove("disabled")
	$share.addEventListener("click", () => {
		navigator.share({
			title: document.title,
			url: location.href,
		}).catch(e => {
			console.error("failed to share", e);
		})
	})
};
