let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=25;
const ALTURA_PERSONAJE=50;
const ANCHO_PERSONAJE=30;
const ALTO_LIMON=20;
const ANCHO_LIMON=20;

let personajeX=canvas.width/2;
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE);
let limonX=0;
let limonY=0;
function iniciar() 
{
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
    
}

function dibujarSuelo () 
{
    ctx.fillStyle="blue";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}
function dibujarPersonaje () 
{
    ctx.fillStyle="yellow";
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}
function dibujarLimon() 
{
    ctx.fillStyle="green";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTO_LIMON);
}

function bajarLimon() 
{
 limonY=limonY+10;
 actualizarPantalla();
 detectarColision();
}
function moverIzquierda() 
{
    personajeX=personajeX-10;
    actualizarPantalla();
}
function moverDerecha() 
{
    personajeX=personajeX+10;
    actualizarPantalla();
}

function limpiarCanva() 
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function actualizarPantalla() 
{
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

function detectarColision() 
{
    if (limonX+ANCHO_LIMON>personajeX &&
        limonX<personajeX+ANCHO_PERSONAJE && 
        limonY+ALTO_LIMON>personajeY &&
        limonY<personajeY+ALTURA_PERSONAJE) 
        { alert("LIMON ATRAPADO");   
    } 
    else {
        
    }
    
}