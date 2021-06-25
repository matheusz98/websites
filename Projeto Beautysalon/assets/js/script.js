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
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;
function changeHeaderWhenScroll() {

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
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
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
const backToTopButton = document.querySelector('.back-to-top');
function backToTop() {

    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

// Link ativo
const sections = document.querySelectorAll('main section[id]');
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

        if (checkpointStart && checkpointEnd) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active');
        }
    }
}

// Eventos de scroll
window.addEventListener('scroll', () => {
    changeHeaderWhenScroll();
    backToTop();
    activateMenuAtCurrentSection();
});
