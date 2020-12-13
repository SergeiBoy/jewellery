'use strict';

(function () {
  var openButton = document.querySelector('.page-header__login');
  var modalLogin = document.querySelector('.modal-login:not(.modal-login--login-page)');

  if (openButton && modalLogin) {
    var body = document.querySelector('body');
    var overlay = document.querySelector('.modal-login-overlay');

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
      overlay.classList.remove('modal-login-overlay--modal-opened');
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
      overlay.classList.add('modal-login-overlay--modal-opened');
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
