// DEFINE PROJECT APP OBJECT
const app = {};

$(document).ready(() => {
  app.init();
});

app.init = () => {};

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
