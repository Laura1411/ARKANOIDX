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

//Variable Palito
const alturaPalo = 10
const anchoPalo = 50


let paloX = (canvas.width - anchoPalo) / 2
let paloY = canvas.height - alturaPalo - 10


let presionadoDerecha = false
let presionadoIzquierda = false

function dibujarPelota(){
    ctx.beginPath()
    ctx.arc(x , y, radioPelota , 0, Math.PI * 2)
    ctx.fillStyle = '#FFF'
    ctx.fill()
    ctx.closePath()
}
function dibujarPalo(){
ctx.fillStyle = '#89F'
ctx.fillRect(paloX, paloY, anchoPalo, alturaPalo)

}
function dibujarLadrillos(){}

function deteccionColision(){}

function movimientoPalo(){
    if(presionadoDerecha){
        paloX += 7
    }else if(presionadoIzquierda){
        paloX -= 7
    }
}



function movimientoPelota(){
    //Rebotar pelota en laterales
if(x + dx > canvas.width - radioPelota || x + dx < radioPelota){
    dx = -dx
}

//Rebotar pelota arriba 
if( y + dy < radioPelota){
    dy = -dy
}

//rebota pelota abajo
if(y + dy > canvas.height - radioPelota){
    console.log(' Game Over')
    document.location.reload()
}

  
    x += dx
    y += dy
}

function limpiarCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function iniciarEventos(){
    document.addEventListener('keydown' , keyDownHandler)
    document.addEventListener('keyup' , keyUpHandler)

    function keyDownHandler(event){
        const {key} = event
        if(key === 'Right' || key === 'ArrowRight'){
            presionadoDerecha = true
        }else if(key === 'Left' || key === 'ArrowLeft'){
            presionadoIzquierda = true
        }
    }

    function keyUpHandler(event){
        const {key} = event
        if(key === 'Right' || key === 'ArrowRight'){
            presionadoDerecha = false
        }else if(key === 'Left' || key === 'ArrowLeft'){
            presionadoIzquierda = false
        }
    }
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
iniciarEventos()
