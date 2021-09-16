jQuery(function ($) {
    'use strict';

    $('.owl-carousel').owlCarousel({
		items: 3,
		loop: true,
		margin: 30,
		nav: true,
		dots: true,
		smartSpeed: 3000,
		autoplay: true,
		autoplayTimeout: 700,
		autoplayHoverPause: true,
	});

}(jQuery))