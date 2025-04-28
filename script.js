// script.js

// Referencias
const menuBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const menuIcon = document.getElementById('menu-icon');

// Evento de clic para abrir/cerrar el menú
menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Cambiar la imagen del ícono
    if (navMenu.classList.contains('active')) {
        menuIcon.src = "assets/menu-close.png"; // Imagen de cerrar menú
        menuIcon.alt = "Cerrar menú";
    } else {
        menuIcon.src = "assets/menu-open.png"; // Imagen de abrir menú
        menuIcon.alt = "Abrir menú";
    }
});
