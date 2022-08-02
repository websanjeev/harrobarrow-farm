
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: false,
    focusOnSelect: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-long-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-long-arrow-right"></i></button>'
});