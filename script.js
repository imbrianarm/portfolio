// DEFINE PROJECT APP OBJECT
const app = {};

app.init = () => {};

$(document).ready(() => {
  app.init();
  // Smooth scroll on anchor click
  $('a[href*="#"]').on("click", function(e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      250,
      "linear"
    );
  });

  // Smooth scroll on hire me button click
  $(".aboutButton").on("click", function(e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $("#contact").offset().top
      },
      250,
      "linear"
    );
  });

  // Hamburger Menu Animation
  $(".sidebarBtn").click(function() {
    $(".headerNav").toggleClass("active");
    $(".sidebarBtn").toggleClass("toggle");
  });

  // Close Hamburger on Link click
  $(".headerNav a").on("click", function() {
    $(".headerNav").removeClass("active");
    $(".sidebarBtn").toggleClass("toggle");
  });
});
