/*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

$(window).load(function () {
  $(".preloader").fadeOut(1000); // set duration in brackets
});

/*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

function initParallax() {
  $("#home").parallax("50%", 0.3);
}
initParallax();

/* Back top
  -----------------------------------------------*/

$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $(".go-top").fadeIn(200);
  } else {
    $(".go-top").fadeOut(200);
  }
});
// Animate the scroll to top
$(".go-top").click(function (event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 300);
});

// MENU
$(".navbar-collapse a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
});

//Copyright Text
$("#copyright-text").text("© " + new Date().getFullYear() + " Min Han Photography. All rights reserved.");


