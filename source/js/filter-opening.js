'use strict';

(function () {
  var shop = document.querySelector('.page-main__shop');

  if (shop) {
    var openButton = shop.querySelector('.shop__filter-open-button');
    var closeButton = shop.querySelector('.filter__close-button');

    var filter = shop.querySelector('.filter');

    openButton.classList.remove('shop__filter-open-button--no-js');
    filter.classList.remove('filter--no-js');

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
