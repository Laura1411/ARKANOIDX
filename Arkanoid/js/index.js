const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 448
canvas.height = 400

//Variables del juego
let contador=0

//Variables de la pelota
const radioPelota=4

let x = canvas.width / 2
let y = canvas.height-30

//velocidad de la pelota
let dx = 2
let dy = -2


function dibujarPelota(){
    ctx.beginPath()
    ctx.arc(x , y, radioPelota , 0, Math.PI * 2)
    ctx.fillStyle = '#FFF'
    ctx.fill()
    ctx.closePath()
}
function dibujarPalo(){}
function dibujarLadrllos(){}

function deteccionColision(){}
function movimientoPalo(){}
function movimientoPelota(){
    x += dx
    y += dy
}

function limpiarCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function dibujar(){
    limpiarCanvas()
    //Dibujamos elementos
    dibujarPelota()
    dibujarPalo()
    dibujarLadrillos()

    //Colisiones y movimientos
    deteccionColision()
    movimientoPelota()
    movimientoPalo()

    window.requestAnimationFrame(dibujar)

    
}

dibujar()