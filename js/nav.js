const header = document.querySelector(".main-nav");
const logo = document.querySelector(".nav-logo");
const navbar = document.querySelector(".nav-links");
const navLink = document.querySelector(".nav-link")
const arrow = document.querySelector(".arrow-down");
const otherLanguage = document.querySelector(".language2-parent");
const language = document.querySelector(".language");
const controls = document.querySelector(".header-controls");

let isCliked = false;
language.addEventListener("click", () => {
  if (isCliked === false) {
    arrow.classList.add("arrow-clicked")
    otherLanguage.classList.add("show-language")
    header.classList.add("bigger-header")
    isCliked = true;

    

    header.style.backgroundColor = 'rgb(19, 40, 71)';
    header.style.paddingTop = "0px"
    logo.style.height = '35px';
    logo.style.marginRight = '5px';
    navbar.style.fontSize = '18px';
    header.style.boxShadow = "black 0 -10px 25px 0";
  }
  else {
    arrow.classList.remove("arrow-clicked")
    otherLanguage.classList.remove("show-language")
    header.classList.remove("bigger-header")
    controls.style.marginTop = "0"
    isCliked = false;
  }
})

document.addEventListener('DOMContentLoaded', nav);

function nav() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.main-nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('show')
    burgerActive = true

    header.style.backgroundColor = 'rgb(19, 40, 71)';
    header.style.paddingTop = "0px"
    logo.style.height = '35px';
    logo.style.marginRight = '5px';
    navbar.style.fontSize = '18px';
    header.style.boxShadow = "black 0 -10px 25px 0";
  })
}

window.addEventListener("scroll", function () {
  var header = document.querySelector(".main-nav")
  header.classList.toggle("sticky", window.scrollY > 0)
})

window.addEventListener('scroll', () => {
  const verticalScrollPx = window.scrollY || window.pageYOffset;

  if (verticalScrollPx > 50) {
    header.style.backgroundColor = 'rgb(19, 40, 71)';
    header.style.paddingTop = "0px"
    logo.style.height = '35px';
    logo.style.marginRight = '5px';
    navbar.style.fontSize = '18px';
    header.style.boxShadow = "black 0 -10px 25px 0";
  }
  else {
    header.style.backgroundColor = 'transparent';
    header.style.paddingTop = "10px"
    logo.style.height = '40px';
    logo.style.marginRight = '0px';
    navbar.style.fontSize = '19px';
    header.style.boxShadow = "none";
  }
});