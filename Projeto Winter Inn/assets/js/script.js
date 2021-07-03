const menuToggle = document.querySelector('.toggle');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');

function toggleMenu(){
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
}