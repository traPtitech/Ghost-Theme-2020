import { Splide } from "@splidejs/splide";

const initSplide = $featured => {
	const splide = new Splide($featured, {
		type: 'loop',
		padding: '25%',
		focus: 'center',
		gap: 10,
		breakpoints: {
			840: {
				padding: 0,
				gap: 0
			}
		}
	});

	splide.mount();
}

export const setupCarousel = () => {
	const $featured = document.querySelector('#featured')
	if (!$featured) return;

	initSplide($featured);
};
