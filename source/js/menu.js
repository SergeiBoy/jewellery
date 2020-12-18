'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var navToggle = document.querySelector('.page-header__toggle');

  var pageMain = document.querySelector('.page-main');
  var pageFooter = document.querySelector('.page-footer');

  header.classList.add('page-header--menu-closed');

  navToggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if (header.classList.contains('page-header--menu-closed')) {
      header.classList.remove('page-header--menu-closed');
      header.classList.add('page-header--menu-opened');
      pageMain.classList.add('page-main--menu-opened');
      pageFooter.classList.add('page-footer--menu-opened');
    } else {
      header.classList.remove('page-header--menu-opened');
      header.classList.add('page-header--menu-closed');
      pageMain.classList.remove('page-main--menu-opened');
      pageFooter.classList.remove('page-footer--menu-opened');
    }
  });
})();
