const btnMobile = document.getElementById('menu');
const btnMobileClose = document.getElementById('menu-close');

function addMenu(event) {
    if(event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.add('active');
}

function removeMenu(event) {
    if(event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.remove('active');
}

btnMobile.addEventListener('click', addMenu);
btnMobile.addEventListener('touchstart', addMenu);

btnMobileClose.addEventListener('click', removeMenu);
btnMobileClose.addEventListener('touchstart', removeMenu);