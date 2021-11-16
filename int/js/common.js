// Swiper Intro start
const slider = new Swiper(".in-intro-slider", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "vertical",
});

const intro = new Swiper(".intro-slider", {
    loop: true,
    spaceBetween: 24,
    thumbs: {
        swiper: slider,
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
});

// Swiper feedback start
const feedback = new Swiper(".in-feedback-slider", {
    spaceBetween: 24,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        freeMode: true,
    },
});

const feed = new Swiper(".feedback-slider", {
    spaceBetween: 24,
    thumbs: {
        swiper: feedback,
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

const best = new Swiper(".best-swiper", {
    spaceBetween: 24,
    freeMode: true,
    loop: true,
    slidesPerView: 3,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
// burgermenu

const btnMenu = document.querySelector("#btn-show-menu");
const hideMenu = document.querySelector("#btn-hide-menu");
const body = document.querySelector("body");
const menu = document.querySelector("#menu");

btnMenu.onclick = function() {
    btnMenu.classList.add("hide");
    body.classList.add("overlay");
    menu.classList.add("show");
}

hideMenu.onclick = function() {
    btnMenu.classList.remove("hide");
    body.classList.remove("overlay");
    menu.classList.remove("show");
}