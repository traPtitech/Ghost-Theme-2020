import Swiper, {Navigation, Pagination, Lazy} from "swiper";

export const setupCarousel = () => {
	const $featured = document.querySelector('#featured')
	if (!$featured) return;

	Swiper.use([Navigation, Pagination, Lazy]);

	return new Swiper($featured, {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		centeredSlides : true,
		preloadImages: false,
		breakpoints: {
			840: {
				slidesPerView: 2,
				spaceBetween: 10,
				watchSlidesProgress: true,
				watchSlidesVisibility: true
			}
		},
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
		}
	});
};
