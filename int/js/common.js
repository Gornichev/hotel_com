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
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
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
});
const feed = new Swiper(".feedback-slider", {
    spaceBetween: 24,
    thumbs: {
        swiper: feedback,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        freeMode: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

