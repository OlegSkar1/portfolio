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

//translate
let languageTranslate = "en";
const form = document.querySelector(".contacts-form");
const tel = document.getElementById("tel");
const message = document.getElementById("message");

function changeTranslate(language) {
  if (languageTranslate === language) {
    return;
  }
  languageTranslate = language;
  if (language === "ru") {
    lang_en.classList.remove("changeColor");
    lang_ru.classList.add("changeColor");
    tel.placeholder = "Телефон";
    message.placeholder = "Сообщение";
  } else {
    lang_ru.classList.remove("changeColor");
    lang_en.classList.add("changeColor");
    tel.placeholder = "Phone";
    message.placeholder = "Message";
  }
  Array.from(document.getElementsByTagName("*")).forEach((item) => {
    if (
      item.dataset.translate &&
      i18Obj[languageTranslate][item.dataset.translate]
    ) {
      item.textContent = i18Obj[languageTranslate][item.dataset.translate];
    }
  });
}
