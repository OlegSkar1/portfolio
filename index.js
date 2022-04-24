'use strict';
(function () {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.scrollY > 75) {
      header.classList.add('header_active');
    } else header.classList.remove('header_active');
  };
})();

//Burger Handler
(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('nav');
  const menuCloseItem = document.querySelector('.header__nav-close');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('nav_active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('nav_active');
  });
})();
