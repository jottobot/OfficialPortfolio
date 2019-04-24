$(document).ready(function () {
  // Add smooth scrolling to nav bar links
  $("#about-me").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($('#about').offset().top)
    }, 200);
  });
  $("#web").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($('#webPage').offset().top)
    }, 200);
  });
  $("#art").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($('#artPage').offset().top)
    }, 200);
  });
  $("#contact").on('click', function(event) {
    $('html, body').animate({
      scrollTop: ($('#contactPage').offset().top)
  }, 200);
});

});

// // Activate Carousel
// // $("#myCarousel").carousel();

// // Enable Carousel Indicators
// $(".item").click(function(){
//   $("#myCarousel").carousel(1);
// });

// // Enable Carousel Controls
// $(".left").click(function(){
//   $("#myCarousel").carousel("prev");
// });