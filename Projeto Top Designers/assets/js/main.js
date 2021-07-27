// Owl Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
    },
});