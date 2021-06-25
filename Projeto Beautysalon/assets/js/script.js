// Abre e fecha o menu quando clicar no ícone: hambúrguer e x
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
}

// Quando clicar em um item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show');
    });
}

// Mudar o header da página quando der scroll
function changeHeaderWhenScroll() {
    const header = document.querySelector('#header');
    const navHeight = header.offsetHeight;

    if(window.scrollY >= navHeight) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
}

// Swiper js
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})

// Scroll reveal
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 500,
    reset: true
});

scrollReveal.reveal(
    `#home .image, #home .text, 
    #about .image, #about .text, 
    #services header, #services .card, 
    #testimonials header, #testimonials .testimonials 
    #contact .text, #contact .links
    footer .brand, footer .social`, 
    { interval: 100 }
);

// Back to top
function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top');

    if (window.scrollY >= 600) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

// Eventos de scroll
window.addEventListener('scroll', () => {
    changeHeaderWhenScroll();
    backToTop();
})