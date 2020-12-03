'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var navToggle = document.querySelector('.page-header__toggle');

  header.classList.add('page-header--menu-closed');

  navToggle.addEventListener('click', function () {
    if (header.classList.contains('page-header--menu-closed')) {
      header.classList.remove('page-header--menu-closed');
      header.classList.add('page-header--menu-opened');
    } else {
      header.classList.remove('page-header--menu-opened');
      header.classList.add('page-header--menu-closed');
    }
  });
})();

'use strict';

(function () {
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })
})();
