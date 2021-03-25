//service-part slider

$('.service-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-long-arrow-alt-left prev"></i>"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-right right"></i>'

});


var mixer = mixitup('.img-part');


//testimonial-part slider

$('.test-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-long-arrow-alt-left prev"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-right right"></i>'
});
