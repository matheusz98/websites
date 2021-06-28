const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu(){
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}