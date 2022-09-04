$('nav a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();

    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 500);
}); 

const btnMenu = document.getElementById('menu');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
};

btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);