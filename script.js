document.addEventListener('DOMContentLoaded', function () {
    let menus = document.querySelector('.nav-list');
    let menuBtn = document.querySelector('.menu-btn');
    let closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener('click', function () {
        menus.classList.add('active');
    });

    closeBtn.addEventListener('click', function () {
        menus.classList.remove('active');
    });
});