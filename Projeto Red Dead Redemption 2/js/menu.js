const menu = document.querySelector('#side-menu');
const menuItems = document.querySelector('.menu');

// Display the side menu
const sideMenu = () => {
    menu.classList.toggle('is-active');
    menuItems.classList.toggle('active');
};

menu.addEventListener('click', sideMenu);