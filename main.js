const menuEmail = document.querySelector('.navbar-email');
const desktopMenu  = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', quitarMostrarDestoktopMenu);

function quitarMostrarDestoktopMenu(){
desktopMenu.classList.toggle('inactive')

}