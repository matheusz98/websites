const menu = document.querySelector('#top-menu');
const menuItems = document.querySelector('.menu');

const topMenu = () => {
    menu.classList.toggle('is-active');
    menuItems.classList.toggle('active');
}

menu.addEventListener('click', topMenu);