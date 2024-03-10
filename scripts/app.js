let menuDesplegable = document.getElementById('menu-desplegable');
let desplegado = false;

function desplegarMenu() {
    if(desplegado == false) {
        menuDesplegable.style.visibility = 'visible';
        menuDesplegable.style.opacity = '1';
        menuDesplegable.style.transform = 'translateX(0%)'
        desplegado = true;
    }
    else {
        menuDesplegable.style.visibility = 'hidden';
        menuDesplegable.style.opacity = '0';
        menuDesplegable.style.transform = 'translateX(-100%)'
        desplegado = false;
    }
};