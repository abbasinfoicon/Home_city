/*========================================================================================================
================================ 01- NEW ARRIVAL CAROUSEL ===================================================================
===========================================================================================================*/

$('.arrival-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    dots: false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
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
    margin:30,
    responsiveClass:true,
    nav: false,
    dots: true,
    responsive:{
        0:{
            items:1,
            margin: 0
        },
        600:{
            items:1,
            margin: 0
        },
        1000:{
            items:2,
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
================================ Auto TIMEING ===================================================================
===========================================================================================================*/

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("day").innerHTML = days;
  document.getElementById("hr").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("day").innerHTML = "EXPIRED";
  }
}, 1000);