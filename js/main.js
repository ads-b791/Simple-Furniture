$(function () {

	$('.slider').slick({
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: true,
		nextArrow: '<button class="slick-arrow slick-next"><img src="img/next.png" alt=""></button>',
		prevArrow: '<button class="slick-arrow slick-prev"><img src="img/prev.png" alt=""></button>',
		responsive: [
			{
				breakpoint: 1759,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 1141,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 874,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 570,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 2000
				}
			}
		]
	});

});


const menuBurger = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (menuBurger) {
	menuBurger.addEventListener("click", function (e) {
		menuBurger.classList.toggle('_active');
		if (menuBody) {
			menuBody.classList.toggle('_active');
		}
	});
}