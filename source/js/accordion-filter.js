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
