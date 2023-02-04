//Selector para Boton de la cuenta y el menu de cuenta en desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu  = document.querySelector('.desktop-menu');

//Selector para Boton del menu y el mobile-menu
const botonMenuMobile = document.querySelector('.menu');
const MenuMobile = document.querySelector('.mobile-menu');


botonMenuMobile.addEventListener('click', quitarMostrarMobileMenu);
menuEmail.addEventListener('click', quitarMostrarDestoktopMenu);



function quitarMostrarDestoktopMenu(){
    desktopMenu.classList.toggle('ocultar')
}

function quitarMostrarMobileMenu(){
    MenuMobile.classList.toggle('ocultar')
}