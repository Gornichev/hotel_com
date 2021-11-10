// Swiper Intro start
const swiper = new Swiper(".in-intro-slider", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "vertical",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
const swiper2 = new Swiper(".intro-slider", {
    loop: true,
    spaceBetween: 24,
    thumbs: {
        swiper: swiper,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
// Swiper feedback start
const swiperfeedback = new Swiper(".in-feedback-slider", {
    spaceBetween: 24,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
const swiperinfeedback = new Swiper(".feedback-slider", {
    spaceBetween: 24,
    thumbs: {
        swiper: swiperfeedback,
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

