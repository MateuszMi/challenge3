const menu = document.querySelector("#moblie--menu");
const menuLinks = document.querySelector(".nav__menu");
const item = document.querySelector(".nav__item");

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle("active");
});