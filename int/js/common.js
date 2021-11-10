const swiper = new Swiper(".in-intro-slider", {
    spaceBetween: 24,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "vertical",
});
const swiper2 = new Swiper(".intro-slider", {
    spaceBetween: 24,
    thumbs: {
        swiper: swiper,
    },
});
// Swiper feedback start
const swiperfeedback = new Swiper(".in-feedback-slider", {
    spaceBetween: 24,
    freeMode: true,
    watchSlidesProgress: true,

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

});

