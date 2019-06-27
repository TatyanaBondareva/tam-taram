$(document).ready(function() {
	$('a.video-block').fancybox();
	$('a.main-video-block').fancybox();
	$('.video-wrapper').slick( {
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '',
		nextArrow: '<button class="playlist__button">load more</button>',
		mobileFirst: true,
		centerPadding: '0',
		edgeFriction: 0,
		swipe: false,
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
				prevArrow: '<button class="video-button video-button_back"></button>',
				nextArrow: '<button class="video-button video-button_go"></button>',
				marginLeft: '48px',
				vertical: false,
			}
		},
		{
			breakpoint: 219,
			settings: 'unslick'
		},
		]

	});
	$('.search__button').on("click", openSearch);
	$('#closeMenu').on("click", closeMobileMenu);
	$('#openMenu').on("click", openMobileMenu);
	$('.video-block:nth-child(-n+3)').css('display', 'flex');
	$('.playlist__button').on("click", getAllList);
});

function openSearch() {
	if ($(window).width() >= '767') {
		$("#search").css({'backgroundColor': '#000', 'animation': 'blick .5s  ease-in-out'});
	}
	$("#search-form").removeClass('screen_none');
	$(".header-left-block_bottom").addClass('screen_none');
	$(".search__button").addClass('screen_none');
}

function closeSearch() {
	if ($(window).width() >= '767') {
		$("#search").css('backgroundColor', 'transparent');
	}
	$("#search-form").addClass('screen_none');
	$(".header-left-block_bottom").removeClass('screen_none');
	$(".search__button").removeClass('screen_none');;
}

function openMobileMenu() {
	$('#headerMobileMenu').removeClass('mobile-list_hiden');
	$("#headerMobileMenu").css('animation', 'blick 0.8s  ease-in-out');
}
function closeMobileMenu() {
	$('#headerMobileMenu').addClass('mobile-list_hiden');
}
function getAllList() {
	console.log($(this.closest('.playlist')).children('.video-wrapper').children('.video-block'));
	$(this.closest('.playlist')).children('.video-wrapper').children('.video-block').css({'display': 'flex', 'animation': 'blick 1s  ease-in-out'});
	$(this).prop( "disabled", true ).css('opacity','0.5');
}
