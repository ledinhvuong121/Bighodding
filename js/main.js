$(document).ready(function () {
  $(".hero-container  ").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      "<button type='button' class='slick-prev pull-left arrow'>      <i class='fa-solid fa-arrow-left'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right arrow'><i class='fa-solid fa-arrow-right'></i></button>",
      dots:true,
      
  });
});

// $(document).ready(function () {
//   $(".intro-container").slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left arrow'><i class='fa-solid fa-arrow-left'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right arrow'><i class='fa-solid fa-arrow-right'></i></button>",
//     dots: true,
//   });
// });
