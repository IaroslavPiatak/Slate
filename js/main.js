let menu_icon = document.querySelector('.header__menu-icon');
let mobile_menu = document.querySelector('.header__menu');
let body = document.querySelector('.body');


menu_icon.addEventListener('click', ()=> {
    menu_icon.classList.toggle('header__menu-icon_open');
    mobile_menu.classList.toggle('header__menu_open');
    body.classList.toggle('hidden-content')
})

const mediaQuery = window.matchMedia('(max-width: 768px)')
function handleTabletChange(e) {
  if (e.matches) {
    document.querySelector('.possibilities__img').innerHTML = '<img src="img/main/possibilities/big-picture_mobile.svg" alt="abracadabra">'
    document.querySelector('.gallery-content__img-1').innerHTML = '<img src="img/main/gallery/gallery_img_mobile_1.png" alt="abracadabra">'
    document.querySelector('.gallery-content__img-2').innerHTML = '<img src="img/main/gallery/gallery_img_mobile_2.png" alt="abracadabra">'
    document.querySelector('.gallery-content__img-3').innerHTML = '<img src="img/main/gallery/gallery_img_mobile_3.png" alt="abracadabra">'
    document.querySelector('.gallery-content__img-4').innerHTML = '<img src="img/main/gallery/gallery_img_mobile_4.png" alt="abracadabra">'
    
  }
  else {
    document.querySelector('.possibilities__img').innerHTML = '<img src="img/main/possibilities/big-picture.svg" alt="abracadabra">'
    document.querySelector('.gallery-content__img-1').innerHTML = '<img src="img/main/gallery/gallery_img-1.png" alt="abracadabra">'
    document.querySelector('.gallery-content__img-2').innerHTML = '<img src="img/main/gallery/gallery_img-2.png" alt="abracadabra">'
    document.querySelector('.gallery-content__img-3').innerHTML = '<img src="img/main/gallery/gallery_img-3.png" alt="abracadabra">'
    document.querySelector('.gallery-content__img-4').innerHTML = '<img src="img/main/gallery/gallery_img-4.png" alt="abracadabra">'
  }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)