export const setupHyakkiyagyo = () => {
	const $hyakkiyagyo = document.querySelector("#hyakkiyagyo")
	if (!$hyakkiyagyo) return;
	const hyakkiyagyoOrigin = "https://sysad.trap.show"

	// adjust iframe size
	window.addEventListener("message", (event) => {
		if(event.origin === hyakkiyagyoOrigin){
			$hyakkiyagyo.style.height = event.data + "px";
		}
	});

	// send css path to hyakkiyagyo
	$hyakkiyagyo.addEventListener("load", () => {
		if (!$hyakkiyagyo.src.startsWith(hyakkiyagyoOrigin)) return

		$hyakkiyagyo.contentWindow.postMessage(
			document.querySelector("link[rel=stylesheet][href*=\\/app]").href,
			hyakkiyagyoOrigin
		)
	})
};
