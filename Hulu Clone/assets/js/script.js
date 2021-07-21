const modal = document.querySelector('.modal');
const btnLogin = document.querySelector('.btn-login');
const btnClose = document.querySelector('.close');

btnLogin.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function outsideClick(e) {
    if (e.target == modal) {
        closeModal();
    }
}