const menuToggle = document.querySelector('.toggle');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');

function toggleMenu(){
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Scroll reveal
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 500,
    reset: true
});

scrollReveal.reveal(
    `#soon .title, #soon .line, #soon .container .content,
    #reservation .reception, #reservation .reservation-form, #reservation .field,
    #about container, #about .about-content, #about .content .img-content,  #about .about-imgs,
    #gallery .info, #gallery .box-title,
    #services .section-title, #services .services-container, #services .services-content,
    #newsletter .newsletter-container, #newsletter .newsletter-form`, 
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

// Scroll events
window.addEventListener('scroll', () => {
    backToTop();
});