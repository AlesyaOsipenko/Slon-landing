const swiper = new Swiper('.catalog .swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 10,
    slidesPerView: 7,
    loop: false,
    breakpoints: {
        280: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        560: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        990: {
            slidesPerView: 4
        },
        1199: {
            slidesPerView: 5
        },
        1400: {
            slidesPerView: 7
        },
        1440: {
            slidesPerView: 7
        }
    },

    // If we need pagination
    pagination: {
        el: '.catalog .swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.catalog .slider-button-next',
        prevEl: '.catalog .slider-button-prev',
    },

});


window.onscroll = function () {
    if (window.scrollY < 50) document.querySelector('header').classList.remove('tiny');
    else document.querySelector('header').classList.add('tiny');
};