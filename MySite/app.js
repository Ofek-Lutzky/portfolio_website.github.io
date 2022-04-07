const menu = document.querySelector('#mobile-menu') // we targeted the classes and the id we need for the menu toggle buttom 
const menuLinks = document.querySelector('.navbar__menu')


menu.addEventListener('click', function(){ // make it active when click 
    menu.classList.toggle('is-active'); // refernce 
    menuLinks.classList.toggle('active');
});