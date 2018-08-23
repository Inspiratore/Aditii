$(document).ready(function() {

    /*===================  Hamburgers  ======================*/
    var $hamburger = $(".hamburger");
    var $menu = $(".menu");
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
    });

    $(".hamburger").on("click", function(){
        $menu.toggle();
    });

    /*====================  Carousel  =======================*/
    $('#promo').carousel({
        interval: 4500
    });
    /*=====================  Slider  ========================*/
    $("#all_goods").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        },
        autoplay: false,
        navigation: true,
        rewindNav: true,
        scrollPerPage: false,
        responsiveRefreshRate: 330
    });
});
