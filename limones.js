let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const alturaSuelo=25;
const alturaPersonaje=50;
const anchoPersonaje=30;

let personajeX=canvas.width/2;
function iniciar() 
{
    dibujarSuelo();
    dibujarPersonaje();
    
}

function dibujarSuelo () 
{
    ctx.fillStyle="blue";
    ctx.fillRect(0,canvas.height-alturaSuelo,canvas.width,alturaSuelo);
}
function dibujarPersonaje () 
{
    ctx.fillStyle="yellow";
    ctx.fillRect(personajeX,canvas.height-(alturaSuelo-5+alturaPersonaje),anchoPersonaje,alturaPersonaje);

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
}