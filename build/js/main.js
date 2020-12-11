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

    var addListener = function (item) {
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

      addListener(item);
    }
  }
})();

'use strict';

(function () {
  var accordion = document.querySelector('.shop__filter');

  if (accordion) {
    var filterItems = accordion.querySelectorAll('.filter__form-item');

    var addListener = function (item) {
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

      addListener(item);
    }
  }
})();

'use strict';

(function () {
  var shop = document.querySelector('.page-main__shop');

  if (shop) {
    var openButton = shop.querySelector('.shop__filter-open-button');
    var closeButton = shop.querySelector('.filter__close-button');

    var filter = shop.querySelector('.filter');

    var onCloseButtonClick = function () {
      closePopup();
    };

    var onFilterEscPress = function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        closePopup();
      }
    };

    var onAroundFilterClick = function (evt) {
      if (!filter.contains(evt.target)) {
        evt.preventDefault();
        closePopup();
      }
    };

    var closePopup = function () {
      filter.classList.remove('filter--opened');
      closeButton.removeEventListener('click', onCloseButtonClick);
      document.removeEventListener('keydown', onFilterEscPress);
      document.removeEventListener('click', onAroundFilterClick);
    };

    openButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      filter.classList.add('filter--opened');
      closeButton.addEventListener('click', onCloseButtonClick);
      document.addEventListener('keydown', onFilterEscPress);
      document.addEventListener('click', onAroundFilterClick);
    });
  }
})();

'use strict';

(function () {
  var modal = document.querySelector('.modal-added-to-cart');
  var openButton = document.querySelector('.product-card__link-added-to-cart');

  if (modal && openButton) {
    var closeButton = modal.querySelector('.modal-added-to-cart__close-button');
    var blackout = document.querySelector('.modal-added-to-cart-blackout');
    var body = document.querySelector('body');

    var onCloseButtonClick = function () {
      closePopup();
    };

    var onModalEscPress = function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        closePopup();
      }
    };

    var onAroundModalClick = function (evt) {
      if (!modal.contains(evt.target)) {
        evt.preventDefault();
        closePopup();
      }
    };

    var closePopup = function () {
      modal.classList.remove('modal-added-to-cart--opened');
      blackout.classList.remove('modal-added-to-cart-blackout--modal-opened');
      body.classList.remove('fixed');
      closeButton.removeEventListener('click', onCloseButtonClick);
      document.removeEventListener('keydown', onModalEscPress);
      document.removeEventListener('click', onAroundModalClick);
    };

    openButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      body.classList.add('fixed');
      blackout.classList.add('modal-added-to-cart-blackout--modal-opened');
      modal.classList.add('modal-added-to-cart--opened');
      closeButton.addEventListener('click', onCloseButtonClick);
      document.addEventListener('keydown', onModalEscPress);
      document.addEventListener('click', onAroundModalClick);
    });
  }
})();

'use strict';

(function () {
  var openButton = document.querySelector('.page-header__login');
  var modalLogin = document.querySelector('.modal-login:not(.modal-login--login-page)');

  if (openButton && modalLogin) {
    var body = document.querySelector('body');

    var closeButton = modalLogin.querySelector('.modal-login__close-button');
    var email = modalLogin.querySelector('.modal-login__form-input--email input');
    var submitButton = modalLogin.querySelector('.modal-login__submit-button');

    var isStorageSupport = true;
    var storageEmail = '';

    var writeInLocalStorage = function () {
      if (isStorageSupport) {
        localStorage.setItem('email', email.value);
      }
    };

    var onCloseButtonClick = function () {
      closePopup();
    };

    var onPopupEscPress = function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        closePopup();
      }
    };

    var onAroundPopupClick = function (evt) {
      if (!modalLogin.contains(evt.target)) {
        evt.preventDefault();
        closePopup();
      }
    };

    var onSubmitButtonClick = function () {
      writeInLocalStorage();
    };

    var closePopup = function () {
      writeInLocalStorage();
      modalLogin.classList.remove('modal-login--opened');
      body.classList.remove('fixed');
      closeButton.removeEventListener('click', onCloseButtonClick);
      document.removeEventListener('keydown', onPopupEscPress);
      document.removeEventListener('click', onAroundPopupClick);
      submitButton.removeEventListener('click', onSubmitButtonClick);
    };

    openButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      body.classList.add('fixed');
      modalLogin.classList.add('modal-login--opened');

      try {
        storageEmail = localStorage.getItem('email');
      } catch (err) {
        isStorageSupport = false;
      }

      if (storageEmail) {
        email.value = storageEmail;
      }

      email.focus();
      closeButton.addEventListener('click', onCloseButtonClick);
      document.addEventListener('keydown', onPopupEscPress);
      document.addEventListener('click', onAroundPopupClick);
      submitButton.addEventListener('click', onSubmitButtonClick);
    });
  }
})();
