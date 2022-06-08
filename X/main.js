const toggle = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.dropdown');
const content = document.querySelector('.dropdown_menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    content.classList.toggle('active');
    //icons.classList.toggle('active');
})