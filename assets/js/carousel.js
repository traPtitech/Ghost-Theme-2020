import Swiper, {Navigation, Pagination, Lazy} from "swiper";
import { debounce } from "throttle-debounce";

const BREAKPOINT = 840
const MAX_WIDTH = 1280

const smartphoneOption = {
	slidesPerView: 1,
	spaceBetween: 0
}

const pcOption = {
	slidesPerView: 2,
	spaceBetween: 10,
	watchSlidesProgress: true,
	watchSlidesVisibility: true
}

const initSwiper = oldSwiper => {
	if (oldSwiper) {
		oldSwiper.destroy()
	}

	const options =
		window.innerWidth >= BREAKPOINT
			? pcOption
			: smartphoneOption

	return new Swiper($featured, {
		loop: true,
		centeredSlides : true,
		preloadImages: false,
		width: Math.min(window.innerWidth, MAX_WIDTH),
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
		lazy: {
			loadOnTransitionStart: true
		},
		...options
	});
}

export const setupCarousel = () => {
	const $featured = document.querySelector('#featured')
	if (!$featured) return;

	Swiper.use([Navigation, Pagination, Lazy]);

	let swiper = initSwiper();
	window.addEventListener('resize', debounce(100, () => {
		swiper = initSwiper(swiper);
	}))
};
