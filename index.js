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
  const navCloseList = document.querySelectorAll(".nav-list__link");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("nav_active");
  });
  for (let item of navCloseList) {
    item.addEventListener("click", () => {
      menu.classList.remove("nav_active");
    });
  }
})();

<<<<<<< HEAD
//start translate
const select = document.querySelectorAll(".header__currLang");

for (let lang of select) {
  lang.addEventListener("click", (event) => {
    let currLang = event.target.innerHTML;
    location.href = window.location.pathname + "#" + currLang;
=======
//translate
let languageTranslate = 'en';

function changeTranslate(language) {
  if (languageTranslate === language) {
    return;
  }
  languageTranslate = language;

  Array.from(document.getElementsByTagName('*')).forEach((item) => {
    if (
      item.dataset.translate &&
      i18Obj[languageTranslate][item.dataset.translate]
    ) {
      item.textContent = i18Obj[languageTranslate][item.dataset.translate];
    }
>>>>>>> 6e1e630099021aad0204c681fa11084eab6b965d
  });
}
