const menuToggle = document.querySelector('.toggle');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');

function toggleMenu(){
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
}

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})