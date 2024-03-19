//Variables del menu desplegable
let menuDesplegable = document.getElementById('menu-desplegable');
let desplegado = false;

//Variables de las flechas del carrusel
let flechaIzq = document.getElementById('button-left');
let flechaDer = document.getElementById('button-right');
let carrusel = document.getElementById('carrusel')
let posicion = 0;

//Procedimiento que despliega el menu de opciones
function desplegarMenu() {
    if(desplegado == false) {
        menuDesplegable.style.visibility = 'visible';
        menuDesplegable.style.opacity = '1';
        menuDesplegable.style.transform = 'translateX(0%)';
        desplegado = true;
    }
    else {
        menuDesplegable.style.visibility = 'hidden';
        menuDesplegable.style.opacity = '0';
        menuDesplegable.style.transform = 'translateX(-100%)';
        desplegado = false;
    }
};

//Procedimiento que mueve las imagenes del carrusel de derecha a izquierda
function moverIzquierda() {
    if(posicion != 0) {
        posicion += 100;
        carrusel.style.transform = "translateX("+posicion+"%)";        
    }
}

function moverDerecha() {
    if(posicion != -500) {
        posicion -= 100;
        carrusel.style.transform = "translateX("+posicion+"%)";        
    }
}