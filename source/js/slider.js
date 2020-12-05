'use strict';
/* global $ */
/* eslint no-undef: "error"*/
(function () {
  $(document).ready(function () {
    $('.slider__wrapper').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        }
      ]
    });
  });
})();
