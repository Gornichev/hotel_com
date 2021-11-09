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

const swiperfeedback = new Swiper(".in-feedback-slider", {
    spaceBetween: 24,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});
const swiperinfeedback = new Swiper(".feedback-slider", {
    spaceBetween: 24,

});