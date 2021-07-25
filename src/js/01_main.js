// window.addEventListener('DOMContentLoaded', (event) => {

const menuBtn = document.querySelectorAll('.js-menu__btn');
const menu = document.querySelector('.nav')
const menuClose = document.querySelector('.menu-close');

//todo Добавить провепку

menuBtn.forEach(btn => {

    btn.addEventListener('click', () => {
        menu.classList.add('nav--visible');
        document.body.classList.add('body--fixed');
    })
})

menuClose.addEventListener('click', () => {
    menu.classList.remove('nav--visible');
    document.body.classList.remove('body--fixed');
})

const objectSlider = new Swiper(".object__slider", {
    speed: 500,
    loop: true,
    effect: "fade",

    slidesPerView: 1,

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

// });
