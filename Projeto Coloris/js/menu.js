const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.nav-menu');
const navLogo = document.querySelector('.logo');

//Display the mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const projectsMenu = document.querySelector('#projects-page');
    let scrollPos = window.scrollY;
    //How to get the scroll position
    console.log(scrollPos);
    
    // Adds "highlight" class to menu items
    if(window.innerWidth > 0 && scrollPos < 380){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 600 && scrollPos < 800) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 900 && scrollPos < 1100) {
        projectsMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }

    if (elem && window.innerWidth < 960 && scrollPos < 600 || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile menu when click on item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');

    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLink.classList.remove('active');
    }
};

menuLink.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);