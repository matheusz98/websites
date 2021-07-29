// Owl Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
    },
});

// Form & Modal
const form = document.querySelector('.contact-form');
const name = document.querySelector('.full-name');
const email = document.querySelector('.email-address');
const subject = document.querySelector('.subject');
const message = document.querySelector('.message');
const submit = document.querySelector('.submit-form');
const modal = document.querySelector('.modal-wrapper');
const close = document.querySelector('.modal-close');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(
        name.value == '' || name.value == undefined && 
        email.value == '' || email.value == undefined &&
        subject.value == '' || subject.value == undefined &&
        message.value == '' || message.value == undefined
        ) {
        alert('Please enter the information bellow');
    } else {
        form.reset();
        modal.classList.toggle('none');
    }
});

close.addEventListener('click', () => {
    modal.classList.toggle('none');
});

// Mobile menu
const openMenu = document.querySelector('.fa-bars');
const closeMenu = document.querySelector('.fa-times-circle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-nav');

openMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('none');
    mobileNav.classList.remove('close-menu');
    mobileNav.classList.toggle('open-menu');
    openMenu.classList.toggle('none');
});

closeMenu.addEventListener('click', () => {
    setTimeout(() => {
        mobileMenu.classList.toggle('none');
        openMenu.classList.toggle('none');
    }, 500);
    mobileNav.classList.toggle('open-menu');
    mobileNav.classList.toggle('close-menu');
});

// Back to top
const btn = $('.scrolltop');
$(window).scroll(function() {
	if ($(window).scrollTop() > 500) {
	  btn.addClass('show');
	} else {
	  btn.removeClass('show');
	}
  });
  btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '500');
});

// Scroll Reveal
const sr = ScrollReveal({
	origin: 'top',
	distance: '20px',
	duration: 1500,
	reset: false
});


ScrollReveal().reveal('.left-content', { origin: 'left' });
ScrollReveal().reveal('.hero-img', { origin: 'right' });
ScrollReveal().reveal('#about .left', { origin: 'left' });
ScrollReveal().reveal('#about .right', { origin: 'right' });
ScrollReveal().reveal('.section-title', { origin: 'bottom' });
ScrollReveal().reveal('.services-content, .item-1, .services-content, .item-3, .services-content, .item-5', { origin: 'right' });
ScrollReveal().reveal('.services-content, .item-2, .services-content, .item-4, .services-content, .item-6', { origin: 'left' });
ScrollReveal().reveal('#qualities .col', { origin: 'bottom' });
ScrollReveal().reveal('#projects .col', { origin: 'bottom' });
ScrollReveal().reveal('.testimonials-container', { origin: 'bottom' });
ScrollReveal().reveal('#team .col', { origin: 'bottom' });
ScrollReveal().reveal('.clients-content', { origin: 'bottom' });
ScrollReveal().reveal('.contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.footer-container', { origin: 'bottom' });