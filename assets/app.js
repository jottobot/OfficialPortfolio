$(document).ready(function () {
  $("#about-me").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($('#about').offset().top)
    }, 500);
  });
  $("#web").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($('#webPage').offset().top)
    }, 500);
  });
  $("#art").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($('#artPage').offset().top)
    }, 500);
  });
  $("#contactt").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($('#contactPage').offset().top)
    }, 500);
  });
});