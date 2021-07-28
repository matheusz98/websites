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