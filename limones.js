let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const alturaSuelo=25;
const alturaPersonaje=50;
const anchoPersonaje=30;


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
    ctx.fillRect(canvas.width/2,canvas.height-(alturaSuelo-5+alturaPersonaje),anchoPersonaje,alturaPersonaje);

}