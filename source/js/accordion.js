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
