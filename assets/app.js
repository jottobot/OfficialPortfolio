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
  $("#contact").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($('#contactPage').offset().top)
    }, 200);
  });

  // When the user scrolls the page, execute myFunction 
  window.onscroll = function () { myFunction() };

  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

});

