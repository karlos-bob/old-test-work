$(document).ready(function(){
    $(".about-us-carousel").owlCarousel({
        loop:true,
        nav: true,
        navText:false,
        dots: true,
        pagination: true,
        lazyLoad: false,
        autoplay:true,
        animateOut: 'fadeOut',
        slideSpeed : 200,
        autoplayTimeout: 9000,
        responsive: {
            0 : {
                items:1
            },
            480 : {
                items:1
            },
            600 : {
                items:1
            },
            991 : {
                items:1
            }
        }
    });
});

$(document).ready(function(){
    $(".bloquote-carousel").owlCarousel({
        loop:true,
        nav: true,
        navText:false,
        dots: true,
        pagination: true,
        lazyLoad: false,
        autoplay:true,
        animateOut: 'fadeOut',
        slideSpeed : 200,
        autoplayTimeout: 9000,
        responsive: {
            0 : {
                items:1
            },
            480 : {
                items:1
            },
            600 : {
                items:1
            },
            991 : {
                items:1
            }
        }
    });
});

