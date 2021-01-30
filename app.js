const menu = document.querySelector("#moblie--menu");

const menuLinks = document.querySelector(".nav__menu")

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle("active");
});