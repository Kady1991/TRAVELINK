document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul.menu");
    const header = document.querySelector("header");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active-menu");
        header.classList.toggle("active-nav");
    });
});
