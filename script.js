// DEFINE PROJECT APP OBJECT
const app = {};

$(document).ready(() => {
  app.init();
});

app.init = () => {
  // app.portfolioCover("#litTrackerText", "#litTrackerImage");
};

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

// app.portfolioCover = (a, b) => {
//   $(a, b).hover(
//     function() {
//       $(b).css("filter", "grayscale(0%)");
//       $(b).css("transform", "scale(1.1)");
//     },
//     function() {
//       // on mouseout, reset the background colour
//       $(b).css("filter", "grayscale(100%)");
//       $(b).css("transform", "scale(1)");
//     }
//   );
// };
