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

$(window).scroll(function () {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

//Copyright Text
$("#copyright-text").text(
  "© " + new Date().getFullYear() + " Min Han Photography. All rights reserved."
);

// initialize manually with a list of links
$("[data-gallery=photoviewer]").click(function (e) {
  e.preventDefault();
  console.log($(this).attr("data-index"))
  var items = [],
    options = {
      index: $(this).attr("data-index"),
    };

  $("[data-gallery=photoviewer]").each(function () {
    items.push({
      src: $(this).attr("href"),
      title: $(this).attr("data-title"),
    });
  });

  new PhotoViewer(items, options);
});
