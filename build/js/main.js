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

'use strict';

(function () {
  var accordion = document.querySelector('.faq');

  if (accordion) {
    var faqItems = accordion.querySelectorAll('.faq__item');

    var addingListener = function (item) {
      var toggle = item.querySelector('button');

      toggle.addEventListener('click', function () {
        if (item.classList.contains('faq__item--opened')) {
          item.classList.remove('faq__item--opened');
          item.classList.add('faq__item--closed');
        } else {
          item.classList.remove('faq__item--closed');
          item.classList.add('faq__item--opened');
        }
      });
    };

    for (var i = 0; i < faqItems.length; i++) {
      var item = faqItems[i];

      if (i === 0) {
        item.classList.add('faq__item--opened');
      } else {
        item.classList.add('faq__item--closed');
      }

      addingListener(item);
    }
  }
})();

'use strict';

(function () {
  var accordion = document.querySelector('.shop__filter');

  if (accordion) {
    var filterItems = accordion.querySelectorAll('.filter__form-item');

    var addingListener = function (item) {
      var toggle = item.querySelector('button');

      toggle.addEventListener('click', function () {
        if (item.classList.contains('filter__form-item--opened')) {
          item.classList.remove('filter__form-item--opened');
          item.classList.add('filter__form-item--closed');
        } else {
          item.classList.remove('filter__form-item--closed');
          item.classList.add('filter__form-item--opened');
        }
      });
    };

    for (var i = 0; i < filterItems.length; i++) {
      var item = filterItems[i];

      if (i === 0 || i === 3) {
        item.classList.add('filter__form-item--opened');
      } else {
        item.classList.add('filter__form-item--closed');
      }

      addingListener(item);
    }
  }
})();
