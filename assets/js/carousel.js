import Swiper from 'swiper';

export const setupCarousel = observer => {
	const $featured = document.querySelector('#featured')
	if (!$featured) return;
	return new Swiper($featured, {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		centeredSlides : true,
		breakpoints: {
			840: {
				slidesPerView: 2,
				spaceBetween: 10
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
		on: {
			init() {
				observer.observe()
			},
			slideChange() {
				observer.observe()
			}
		}
	});
};