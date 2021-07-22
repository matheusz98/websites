// Sticky
$(document).ready(function(){
	$(window).bind('scroll', function() {
		const navHeight = $('header').height();
		if ($(window).scrollTop() > navHeight) {
			$('header').addClass('sticky');
		 }
		else {
			$('header').removeClass('sticky');
		 }
	});
});

// Mobile menu
$('.toggle').on('click', function(e) {
	$('.menu').slideToggle('200');
	$('.toggle-open').toggleClass('open');
	$('.toggle-close').toggleClass('close');
});

// Scroll spy
const spy = new Gumshoe('nav a');

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
	reset: true
});

ScrollReveal().reveal('.home-img, .content', { origin: 'left' });
ScrollReveal().reveal('.about-img, .about-text', { origin: 'right' });
ScrollReveal().reveal('.title, .perks-item, .footer-container, .copyright', { interval: 100 });
ScrollReveal().reveal('.item, .glide, .contact-box, .newsletter-content', { origin: 'bottom' });