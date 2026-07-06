let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
let puntaje=0;
let vidas=3;
let velocidadCaida=200;
let intervalo;



const ALTURA_SUELO=25;
const ALTURA_PERSONAJE=50;
const ANCHO_PERSONAJE=30;
const ALTO_LIMON=20;
const ANCHO_LIMON=20;

let personajeX=canvas.width/2;
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE);
let limonX;
let limonY;
function iniciar() 
{
    dibujarSuelo();
    dibujarPersonaje();
    aparecerLimon();
    intervalo=setInterval(bajarLimon,velocidadCaida);
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
 detectarAtrapado();
 detectarPiso();
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

function detectarAtrapado() 
{
    if (limonX+ANCHO_LIMON>personajeX &&
        limonX<personajeX+ANCHO_PERSONAJE && 
        limonY+ALTO_LIMON>personajeY &&
        limonY<personajeY+ALTURA_PERSONAJE) 
        { //alert("LIMON ATRAPADO");
            aparecerLimon();  
            puntaje=puntaje+1;
            mostrarEnSpan("txtPuntaje", puntaje);
            if (puntaje==3) 
            {
            clearInterval(intervalo);
            velocidadCaida=150;
            intervalo=setInterval(bajarLimon,velocidadCaida);
            }
            else if (puntaje==6) 
                {
                clearInterval(intervalo);
                velocidadCaida=100;
                intervalo=setInterval(bajarLimon,velocidadCaida);
                }
                else if (puntaje==10) 
                {
                alert("HAS GANADO, GRAN TRABAJO");
                clearInterval(intervalo);
                }     
    }     
}
function detectarPiso() 
{
    if (limonY+ALTO_LIMON>=canvas.height-ALTURA_SUELO) 
        {
            aparecerLimon();
            vidas=vidas-1;
            mostrarEnSpan("txtVidas", vidas);
            if (vidas==0) 
            {
                alert("GAME OVER");
                clearInterval(intervalo);
            }
        }
    
    
}
function aparecerLimon() 
{
    limonX=generarAleatorio(0,canvas.width-ANCHO_LIMON);
    console.log(limonX);
    limonY=0;
    actualizarPantalla();   
}

function reiniciar() 
{
    vidas=3;
    puntaje=0;
    mostrarEnSpan("txtVidas",vidas);
    mostrarEnSpan("txtPuntaje",puntaje);
    clearInterval(intervalo);
    velocidadCaida=200;
    iniciar();
}

function generarAleatorio(min,max) 
{
    let random=Math.random();
    let numero=random*(max);
    let numeroEntero=parseInt(numero);
    return numeroEntero; 
}
function mostrarEnSpan(idSpan,valor) 
{
    let cmpSpan=document.getElementById(idSpan);
    cmpSpan.textContent=valor;
}