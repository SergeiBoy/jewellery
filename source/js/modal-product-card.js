'use strict';

(function () {
  var modal = document.querySelector('.modal-cart');
  var openButton = document.querySelector('.product-card__link-added-to-cart');

  if (modal && openButton) {
    var closeButton = modal.querySelector('.modal-cart__close-button');
    var overlay = document.querySelector('.modal-cart-overlay');
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
      modal.classList.remove('modal-cart--opened');
      overlay.classList.remove('modal-cart-overlay--modal-opened');
      body.classList.remove('fixed');
      closeButton.removeEventListener('click', onCloseButtonClick);
      document.removeEventListener('keydown', onModalEscPress);
      document.removeEventListener('click', onAroundModalClick);
    };

    openButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      body.classList.add('fixed');
      overlay.classList.add('modal-cart-overlay--modal-opened');
      modal.classList.add('modal-cart--opened');
      closeButton.addEventListener('click', onCloseButtonClick);
      document.addEventListener('keydown', onModalEscPress);
      document.addEventListener('click', onAroundModalClick);
    });
  }
})();
