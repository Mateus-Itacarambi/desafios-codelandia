const btnMenu = document.getElementById('menu');
const btnVerMais = document.getElementById('ver-mais');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
};

function toggleVerMais(event){
    if(event.type === 'touchstart') event.preventDefault();
    const containerCard = document.getElementById('container-card');
    containerCard.classList.toggle('active');
    if (containerCard.className === "container-card active"){
        btnVerMais.innerText = "Ver menos";
    } else{
        btnVerMais.innerText = "Ver mais";
    };
};

btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);

btnVerMais.addEventListener('click', toggleVerMais);
btnVerMais.addEventListener('touchstart', toggleVerMais);