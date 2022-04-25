"use strict";
(function () {
  const header__container = document.querySelector(".header__container");
  window.onscroll = () => {
    if (window.scrollY > 75) {
      header__container.classList.add("header_active");
    } else header__container.classList.remove("header_active");
  };
})();

//Burger Handler
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector("nav");
  const menuCloseItem = document.querySelector(".header__nav-close");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("nav_active");
  });
})();
