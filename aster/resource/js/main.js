
!(function($) {
  "use strict";

  
// $(document).ready(function() {
//   $('.newheader').addClass('addline');
// });
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  

  $('#testimonials').owlCarousel({
    // center: false,
    loop:true,
    margin:30,
    nav:true,
    items: 1,
    navText: [
      "<img src='resource/img/rightarrow.png'>","<img src='resource/img/left-arrow.png'>"
    ],
    navContainer: '#testimonials',
    responsive:{
        0:{
            items: 1,
            stagePadding: 0,
        },
        600:{
            items: 1,
            stagePadding: 0,
        },
        1000:{
            items: 1,
        }
    }
});


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav: true,
    navText: [
      "<img src='resource/img/rightarrow.png'>","<img src='resource/img/left-arrow.png'>"
    ],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:2
      },
      1400:{
        items:2
      }
    },
    autoplay:false,
    autoplayTimeout:2500,
    autoplayHoverPause:true
  })
});
 

})(jQuery);