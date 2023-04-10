const mobileMenu = document.getElementById('mobile-menu');
const logo = document.getElementById('logo');
const menu = document.getElementById('main-menu')
mobileMenu.addEventListener('click', showMenu);

function showMenu(){
    mobileMenu.classList.toggle('show');
    logo.classList.toggle('show');
    menu.classList.toggle('show');
}