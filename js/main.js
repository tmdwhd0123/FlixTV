$(document).ready(function () {
	"use strict"; // start of use strict

	/*==============================
	Header
	==============================*/
	var mainHeader = $('.header--hidden');
	var scrolling = false,
	previousTop = 0,
	currentTop = 0,
	scrollDelta = 10,
	scrollOffset = 140;

	var scrolling = false;
	$(window).on('scroll', function(){
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame)
				? setTimeout(autoHideHeader, 250)
				: requestAnimationFrame(autoHideHeader);
		}
	});
	$(window).trigger('scroll');

	function autoHideHeader() {
		var currentTop = $(window).scrollTop();
		checkSimpleNavigation(currentTop);
		previousTop = currentTop;
		scrolling = false;
	}

	function checkSimpleNavigation(currentTop) {
		if (previousTop - currentTop > scrollDelta) {
			mainHeader.removeClass('header--scroll');
		} else if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
			mainHeader.addClass('header--scroll');
		}
	}
	function disableScrolling(){
		var x=window.scrollX;
		var y=window.scrollY;
		window.onscroll=function(){window.scrollTo(x, y);};
	}

	function enableScrolling(){
		window.onscroll=function(){};
	}

	$('.header__menu').on('click', function() {
		$('.header__menu').toggleClass('header__menu--active');
		$('.header').toggleClass('header--menu');
		$('.header__nav').toggleClass('header__nav--active');
	});

	$('.header__search, .header__form-close').on('click', function() {
		$('.header__form').toggleClass('header__form--active');
	});

	$(window).on('scroll', function () {
		if ( $(window).scrollTop() > 0 ) {
			$('.header--fixed').addClass('header--active');
		} else {
			$('.header--fixed').removeClass('header--active');
		}
	});
	$(window).trigger('scroll');

	/*==============================
	Multi level dropdowns
	==============================*/
	$('ul.dropdown-menu [data-toggle="dropdown"]').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();

		$(this).siblings().toggleClass('show');
	});

	$(document).on('click', function (e) {
		$('.dropdown-menu').removeClass('show');
	});

	/*==============================
	Home carousel
	==============================*/
	$('.home__carousel').owlCarousel({
		mouseDrag: true,
		touchDrag: true,
		dots: true,
		loop: true,
		autoplay: false,
		smartSpeed: 600,
		margin: 20,
		autoHeight: true,
		autoWidth: true,
		responsive: {
			0 : {
				items: 2,
			},
			576 : {
				items: 2,
				margin: 20,
			},
			768 : {
				items: 2,
				margin: 30,
				center: true,
			},
			1200 : {
				items: 3,
				margin: 30,
				center: true,
				mouseDrag: false,
				dots: false,
				startPosition: 1,
				slideBy: 3,
			},
		}
	});

	/*==============================
	Select
	==============================*/
	$('.catalog__select').select2({
		minimumResultsForSearch: Infinity
	});

	/*==============================
	Carousel
	==============================*/
	$('.section__carousel').owlCarousel({
		mouseDrag: true,
		touchDrag: true,
		dots: true,
		loop: true,
		autoplay: false,
		smartSpeed: 600,
		margin: 20,
		autoHeight: true,
		responsive: {
			0 : {
				items: 2,
			},
			576 : {
				items: 3,
			},
			768 : {
				items: 3,
				margin: 30,
			},
			992 : {
				items: 4,
				margin: 30,
			},
			1200 : {
				items: 6,
				margin: 30,
				dots: false,
				mouseDrag: false,
				slideBy: 6,
				smartSpeed: 400,
			},
		}
	});

	/*==============================
	Interview
	==============================*/
	$('.section__interview').owlCarousel({
		mouseDrag: true,
		touchDrag: true,
		dots: true,
		loop: true,
		autoplay: false,
		smartSpeed: 600,
		margin: 20,
		autoHeight: true,
		responsive: {
			0 : {
				items: 1,
			},
			576 : {
				items: 2,
			},
			768 : {
				items: 2,
				margin: 30,
			},
			992 : {
				items: 3,
				margin: 30,
			},
			1200 : {
				items: 3,
				margin: 30,
				dots: false,
				mouseDrag: false,
				slideBy: 3,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
			},
		}
	});

	/*==============================
	Series
	==============================*/
	$('.section__series').owlCarousel({
		mouseDrag: true,
		touchDrag: true,
		dots: true,
		loop: true,
		autoplay: false,
		smartSpeed: 600,
		margin: 20,
		autoHeight: true,
		responsive: {
			0 : {
				items: 2,
			},
			576 : {
				items: 3,
			},
			768 : {
				items: 3,
				margin: 20,
			},
			992 : {
				items: 4,
				margin: 20,
			},
			1200 : {
				items: 5,
				margin: 20,
				dots: false,
				mouseDrag: false,
			},
			1440 : {
				items: 5,
				margin: 20,
				dots: false,
				mouseDrag: false,
			},
		}
	});

	/*==============================
	Live
	==============================*/
	$('.section__live').owlCarousel({
		mouseDrag: true,
		touchDrag: true,
		dots: true,
		loop: true,
		autoplay: false,
		smartSpeed: 600,
		margin: 20,
		autoHeight: true,
		responsive: {
			0 : {
				items: 1,
			},
			576 : {
				items: 2,
			},
			768 : {
				items: 2,
				margin: 30,
			},
			992 : {
				items: 3,
				margin: 30,
			},
			1200 : {
				items: 3,
				margin: 30,
				dots: false,
				mouseDrag: false,
				slideBy: 3,
			},
		}
	});

	/*==============================
	Partners
	==============================*/
	$('.partners').owlCarousel({
		mouseDrag: false,
		touchDrag: false,
		dots: false,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 600,
		margin: 20,
		responsive : {
			0 : {
				items: 2,
			},
			576 : {
				items: 2,
				margin: 30,
			},
			768 : {
				items: 3,
				margin: 30,
			},
			992 : {
				items: 4,
				margin: 30,
			},
			1200 : {
				items: 6,
				margin: 30,
			},
		}
	});

	/*==============================
	Navigation
	==============================*/
	$('.section__nav--prev, .home__nav--prev').on('click', function() {
		var carouselId = $(this).attr('data-nav');
		$(carouselId).trigger('prev.owl.carousel');
	});
	$('.section__nav--next, .home__nav--next').on('click', function() {
		var carouselId = $(this).attr('data-nav');
		$(carouselId).trigger('next.owl.carousel');
	});

	/*==============================
	Bg
	==============================*/
	$('.section--full-bg').each( function() {
		if ($(this).attr("data-bg")){
			$(this).css({
				'background': 'url(' + $(this).data('bg') + ')',
				'background-position': 'center center',
				'background-repeat': 'no-repeat',
				'background-size': 'cover'
			});
		}
	});

	$('.section__bg').each( function() {
		if ($(this).attr("data-bg")){
			$(this).css({
				'background': 'url(' + $(this).data('bg') + ')',
				'background-position': 'top center',
				'background-repeat': 'no-repeat',
				'background-size': 'cover'
			});
		}
	});

	/*==============================
	Player
	==============================*/
	function initializePlayer() {
		if ($('#player').length) {
			const player = new Plyr('#player');
		} else {
			return false;
		}
		return false;
	}
	$(window).on('load', initializePlayer());

	/*==============================
	Modal
	==============================*/
	$('.open-video').magnificPopup({
		disableOn: 500,
		fixedContentPos: true,
		type: 'iframe',
		preloader: false,
		removalDelay: 300,
		mainClass: 'mfp-fade',
		callbacks: {
			open: function() {
				if ($(window).width() > 1200) {
					$('.header').css('margin-left', "-" + (getScrollBarWidth()/2) + "px");
				}
			},
			close: function() {
				if ($(window).width() > 1200) {
					$('.header').css('margin-left', 0);
				}
			}
		}
	});

	$('.open-modal').magnificPopup({
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: false,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',
	});

	$('.modal__close').on('click', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	function getScrollBarWidth () {
		var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
			widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
		$outer.remove();
		return 100 - widthWithScroll;
	};

	/*==============================
	Scrollbar
	==============================*/
	var Scrollbar = window.Scrollbar;

	if ($('.header__nav-menu--scroll').length) {
		Scrollbar.init(document.querySelector('.header__nav-menu--scroll'), {
			damping: 0.1,
			renderByPixels: true,
			alwaysShowTracks: true,
			continuousScrolling: true
		});
	}

	if ($('.dashbox__table-wrap--1').length) {
		Scrollbar.init(document.querySelector('.dashbox__table-wrap--1'), {
			damping: 0.1,
			renderByPixels: true,
			alwaysShowTracks: true,
			continuousScrolling: true
		});
	}

	if ($('.dashbox__table-wrap--2').length) {
		Scrollbar.init(document.querySelector('.dashbox__table-wrap--2'), {
			damping: 0.1,
			renderByPixels: true,
			alwaysShowTracks: true,
			continuousScrolling: true
		});
	}


});

// Handle scrolling when tapping on the navbar menu
function scrollToTargetAdjusted(a) {
  var element = document.getElementById(a);
  var headerOffset = 80;
  var elementPosition = element.getBoundingClientRect().top;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var offsetPosition = elementPosition + scrollTop - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

const navbarMenu = document.querySelector('.header__nav');
const navbarMenu2 = document.querySelector('.header__menu');
const navbarMenu3 = document.querySelector('.header');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  const linkid = document.querySelector(link).id;
  scrollToTargetAdjusted(linkid);
  navbarMenu.classList.remove('header__nav--active');
  navbarMenu2.classList.remove('header__menu--active');
  navbarMenu3.classList.remove('header--menu');
});

//Partner slider
$(document).ready(function() {
  $('.logo-carousel').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});

/*=============================================
	=    		Isotope	Active  	      =
=============================================*/
$('.tr-movie-active').imagesLoaded(function () {
	// init Isotope
	var $grid = $('.tr-movie-active').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-sizer',
		}
	});
	// filter items on button click
	$('.tr-movie-menu-active').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});

});
//for menu active class
$('.tr-movie-menu-active button').on('click', function (event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});
