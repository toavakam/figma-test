const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    grid: {
        rows: 2,
    },
    breakpoints: {
        576: {
            slidesPerView: 4,
        },
    },
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});