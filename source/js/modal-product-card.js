'use strict';

(function () {
  var modal = document.querySelector('.modal-added-to-cart');
  var openButton = document.querySelector('.product__card-link-added-to-cart');

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
