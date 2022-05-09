const header = document.querySelector('.header');
const phone = document.querySelector('.show__nav');
const menu = document.querySelector('.menu__action')
const about = document.querySelector('#about');
const portfolio = document.querySelector('#portfolio');
const contact = document.querySelector('#contact');



const showMobileNav = () => {
    // phone.classList.remove('phone__nav');
    phone.classList.add('show');
    menu.innerHTML = `<i class="far fa-window-close"></i>`;

}

const hideMobileNav = () => {
    phone.classList.remove('show');
    // phone.classList.add('phone__nav');
    menu.innerHTML = `<i class="fas fa-bars"></i>`;
}

header.addEventListener('click', (e) => {
    
    if(e.target.classList[1] == 'fa-bars') {
        showMobileNav();
    }
    if(e.target.classList[1] == 'fa-window-close') {
        hideMobileNav();
    }
})

phone.addEventListener('click', (e) => {
    if(e.target.parentElement.className == 'nav__item') {
        hideMobileNav();
    }
})