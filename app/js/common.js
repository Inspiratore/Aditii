$(document).ready(function() {

    /*=============  Settings for Opera-browser  ============*/
    function get_name_browser(){  
        if (navigator.userAgent.search(/Chrome/) > 0) return 'Google Chrome';
        if (navigator.userAgent.search(/Safari/) > 0) return 'Safari';
        return 'Undefined';
    }
    var browser = get_name_browser();
    if(browser === 'Safari'){
        var docWidth = $(document).width();
        // alert(docWidth);
        if(docWidth >= 1600){
            $('#promo p').css({'padding-left' : '104px'});
            $('.slideX img:first-child').css({'padding-left' : '110px'});
            $('.slider_caption').css({'transform' : 'translate(305px,-120px)'});
        } else
        if(docWidth >= 1200 && docWidth < 1600){
            $('#promo p').css({'padding-left' : '93px'});
            $('.slideX img:first-child').css({'padding-left' : '110px'});
            $('.slider_caption').css({'transform' : 'translate(305px,-120px)'});
        }else
        if(docWidth >= 750 && docWidth < 800){
            $('#promo p').css({'padding' : '10px 5px 20px 5px', 'margin': '-10px 0 20px 185px', 'width' : '260px'});
        }else{}
    }


    /*===================  Hamburgers  ======================*/
    var $hamburger = $(".hamburger");
    var $menu = $(".menu");
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
    });

    $(".hamburger").on("click", function(){
        $menu.toggle();
        $("#featured_products").toggleClass("blur");
    });
    $("#main_menu a").on("click", function(){
        $menu.hide();
        $("#featured_products").removeClass("blur");
    });


    /*====================  Carousel  =======================*/
    $('#promo').carousel({
        interval: 450000
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
