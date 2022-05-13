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
let myStorage;
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

//Portfolio
const portfolio = document.querySelector(".portfolio__btns");
let portfolioPics = document.querySelectorAll(".portfolio__pic__thumb");
const button = document.getElementsByTagName("button");

portfolio.addEventListener("click", (event) => {
  if (event.target === button.winter) {
    pic1.setAttribute("src", "./assets/img/winter/1.jpg");
    pic2.setAttribute("src", "./assets/img/winter/2.jpg");
    pic3.setAttribute("src", "./assets/img/winter/3.jpg");
    pic4.setAttribute("src", "./assets/img/winter/4.jpg");
    pic5.setAttribute("src", "./assets/img/winter/5.jpg");
    pic6.setAttribute("src", "./assets/img/winter/6.jpg");
    winter.classList.add("portfolio__btn_changeColor");
    autumn.classList.remove("portfolio__btn_changeColor");
    spring.classList.remove("portfolio__btn_changeColor");
    summer.classList.remove("portfolio__btn_changeColor");
  }

  if (event.target === button.spring) {
    pic1.setAttribute("src", "./assets/img/spring/1.jpg");
    pic2.setAttribute("src", "./assets/img/spring/2.jpg");
    pic3.setAttribute("src", "./assets/img/spring/3.jpg");
    pic4.setAttribute("src", "./assets/img/spring/4.jpg");
    pic5.setAttribute("src", "./assets/img/spring/5.jpg");
    pic6.setAttribute("src", "./assets/img/spring/6.jpg");
    spring.classList.add("portfolio__btn_changeColor");
    winter.classList.remove("portfolio__btn_changeColor");
    autumn.classList.remove("portfolio__btn_changeColor");
    summer.classList.remove("portfolio__btn_changeColor");
  }

  if (event.target === button.summer) {
    pic1.setAttribute("src", "./assets/img/summer/1.jpg");
    pic2.setAttribute("src", "./assets/img/summer/2.jpg");
    pic3.setAttribute("src", "./assets/img/summer/3.jpg");
    pic4.setAttribute("src", "./assets/img/summer/4.jpg");
    pic5.setAttribute("src", "./assets/img/summer/5.jpg");
    pic6.setAttribute("src", "./assets/img/summer/6.jpg");
    summer.classList.add("portfolio__btn_changeColor");
    winter.classList.remove("portfolio__btn_changeColor");
    spring.classList.remove("portfolio__btn_changeColor");
    autumn.classList.remove("portfolio__btn_changeColor");
  }
  if (event.target === button.autumn) {
    pic1.setAttribute("src", "./assets/img/autumn/1.jpg");
    pic2.setAttribute("src", "./assets/img/autumn/2.jpg");
    pic3.setAttribute("src", "./assets/img/autumn/3.jpg");
    pic4.setAttribute("src", "./assets/img/autumn/4.jpg");
    pic5.setAttribute("src", "./assets/img/autumn/5.jpg");
    pic6.setAttribute("src", "./assets/img/autumn/6.jpg");
    autumn.classList.add("portfolio__btn_changeColor");
    winter.classList.remove("portfolio__btn_changeColor");
    spring.classList.remove("portfolio__btn_changeColor");
    summer.classList.remove("portfolio__btn_changeColor");
  }
});
