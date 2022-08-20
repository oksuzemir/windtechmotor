
$(document).ready(function () {
  $('#nav-icon3').click(function () {
    $(this).toggleClass('open');
    $(this).toggleClass('navicon-mobile');
    $(".mobile-nav").toggleClass('mobile-nav-open');
    $("#navbar").toggleClass('nav-fixed-2');

    if ($(window).width() < 980) {
      $(".menu-item-has-children > a").after('<i class="fa fa-angle-right"></i>');
      $('.menu-item-has-children .fa-angle-right').click(function () {
        $(this).next('.sub-menu').slideToggle("fast");
        $(this).toggleClass("rotate")
      });
    }



  });


  $(".harf-siniri").text(function(){
    return $(this).text().length > 300 ? $(this).text().substr(0, 300)+'..' : $(this).text();
});

  window.onscroll = function () {
    myFunction()
  };

  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("nav-fixed")
    } else {
      navbar.classList.remove("nav-fixed");
    }
  }
})




