let menu_icon = document.querySelector('.header__menu-icon');
let mobile_menu = document.querySelector('.header__menu');
let body = document.querySelector('.body');


menu_icon.addEventListener('click', ()=> {
    menu_icon.classList.toggle('header__menu-icon_open');
    mobile_menu.classList.toggle('header__menu_open');
    body.classList.toggle('hidden-content')
})