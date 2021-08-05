/*========================================================================================================
================================ 01- NEW ARRIVAL CAROUSEL ===================================================================
===========================================================================================================*/

$('.arrival-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    dots: false,
    navText: ["<img src='assets/img/left-red-icon.png' class='img-responsive' />", "<img src='assets/img/right-red-icon.png' class='img-responsive' />"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
});

/*========================================================================================================
================================ 02- DEAL OF THE DAY ===================================================================
===========================================================================================================*/

$('.deal-section').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    navText: ["<img src='assets/img/left-red-icon.png' class='img-responsive' />", "<img src='assets/img/right-red-icon.png' class='img-responsive' />"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    }
});

/*=====================================================================
    ==========================  03- ScrollToptoBottom  =========================
    ========================================================================*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#scroll').fadeIn();
    } else {
        $('#scroll').fadeOut();
    }
});
$('#scroll').click(function () {
    $("html, body").animate({scrollTop: 0}, 600);
    return false;
});


/*========================================================================================================
================================ pensions_carousel ===================================================================
===========================================================================================================*/

