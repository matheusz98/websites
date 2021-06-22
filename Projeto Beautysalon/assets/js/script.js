// Abre e fecha o menu quando clicar no ícone: hambúrguer e x
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
}

// Quando clicar em um item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show');
    });
}

// Mudar o header da página quando der scroll
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});