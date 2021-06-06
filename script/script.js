$(document).ready(function() {
    $('.carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.png"></button>',
        responsive: [{
            breakpoint: 800,
            settings: {
                arrows: false,
                dots: true,
                dotsClass: "my-dots",
            }
        }]
    });
});