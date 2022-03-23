window.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        menuLink = document.querySelectorAll('.menu__link'),
        closeElem = document.querySelector('.menu__close'),
        counters = document.querySelectorAll('.skills__ratings-counter'),
        lines = document.querySelectorAll('.skills__ratings-line span'),
        pageUp = document.querySelector('.pageup');

    hamburger.addEventListener('click', () => {
        activateMenu();
    });

    closeElem.addEventListener('click', () => {
        closeMenu(menu);
    });

    menuLink.forEach(item => {
        item.addEventListener('click', () => {
            closeMenu(menu);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
            closeMenu(menu);
        }
    });

    function activateMenu() {
        menu.classList.add('active');
    }

    function closeMenu(selector) {
        selector.classList.remove('active');
    }

    // skills-counters

    counters.forEach((item, i) => {
        lines[i].style.width = item.textContent;
    });

    //pageup

    window.addEventListener("scroll", () => {
        if (window.scrollY > 1000) {
            pageUp.style = 'display: block';
        } else {
            pageUp.style = 'display: none';
        }
    });


});