const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

function toggleMenu(){
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

window.addEventListener('scroll', function() {
    nav.classList.toggle('sticky', window.scrollY > 0);
});