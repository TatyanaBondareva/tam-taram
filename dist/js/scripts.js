$(document).ready(function() {
	$('a.video-block').fancybox();
	$('.video-wrapper').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '',
		nextArrow: '<button class="playlist__button">load more</button>',
		mobileFirst: true,
		centerPadding: '0',
		edgeFriction: 0,
		//lazyLoad: 'progressive',
		swipe: false,
		//margin: '48px',
	adaptiveHeight: true,
		vertical: true,
		responsive: [
		{
			breakpoint: 1199,
			settings: {
				vertical: false,
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: false,
				prevArrow: '<button class="video-button video-button_back"></button>',
				nextArrow: '<button class="video-button video-button_go"></button>',
			}
		},
		{
			breakpoint: 991,
			settings: {
				vertical: false,
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: false,
				prevArrow: '<button class="video-button video-button_back"></button>',
				nextArrow: '<button class="video-button video-button_go"></button>',
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: false,
				centerPadding: '0',
				autoSize: true,
			//	edgeFriction: 0,
				prevArrow: '<button class="video-button video-button_back"></button>',
				nextArrow: '<button class="video-button video-button_go"></button>',
				marginLeft: '48px',
				vertical: false,
			}
		},
		{
			breakpoint: 367,
			settings: {
				slidesToShow:  3,
				slidesToScroll: 2,
				infinite: false,
				centerPadding: '0',
				autoSize: true,
			//	edgeFriction: 0,
				prevArrow: '<button class="video-wrapper__back"><<<</button>',
				nextArrow: '<button class="playlist__button">load more</button>',
				marginLeft: '48px',
				vertical: true,
			}
		},
		{
			breakpoint: 219,
			settings: {
				vertical: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				prevArrow: '<button class="video-wrapper__back">./button>',
				nextArrow: '<button class="playlist__button">load more</button>',
				centerPadding: '0',
			verticalSwiping: true,
			centerPadding: '0',
			}
		},
		]

	});
	$('.search__button').on("click", openSearch);
	$('#closeMenu').on("click", closeMobileMenu);
	$('#openMenu').on("click", openMobileMenu);
	//$('.search-form__close').on("click", closeSearch);
});

function openSearch() {
	if ($(window).width() >= '767'){
		$("#search").css('backgroundColor', '#000');
	}
	let tmp = '<form class="search-form"><input type="search" placeholder="Введите текст" class="search-form__enter enter"><input type="submit" class="search-form__search"><button class="search-form__close" onclick="closeSearch(event)"></button></form>';
	$("#search").html(tmp);
}

function closeSearch() {
	if ($(window).width() >= '767'){
		$("#search").css('backgroundColor', 'transparent');
	}
	let tmp = '<div class="header-left-block header-left-block_bottom"><button class="header-left-block__button-down"><span>nearest salon</span><div class="header-left-block__arrow"></div></button><div class="header-left-block__label">Plush Salon 92101</div></div><div class="search search_bottom"><button class="search__button"></button></div>';
	$("#search").html(tmp);
}

function openMobileMenu() {
	$('#headerMobileMenu').removeClass('mobile-list_hiden');
}
function closeMobileMenu() {
	$('#headerMobileMenu').addClass('mobile-list_hiden');
}
