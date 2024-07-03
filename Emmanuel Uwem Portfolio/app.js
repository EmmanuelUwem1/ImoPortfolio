// code for functionality of nav menu 
var hamMenu = document.getElementById('hamMenu');
var nav = document.getElementById('nav');
function ToggleMenu() {
    hamMenu.classList.toggle('active');
    nav.classList.toggle('open');
}

        const links = document.querySelectorAll('#nav > a');
        
        links.forEach(link =>{
            link.addEventListener('click', () =>{
                hamMenu.classList.remove('active');
    nav.classList.remove('open');
            });
        });

        window.addEventListener('scroll', () =>{
            hamMenu.classList.remove('active');
    nav.classList.remove('open');
        })