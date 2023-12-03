const input = require("prompt-sync")({sigint: true});

const numeroGanador = Math.floor(Math.random()*10)
// Math.random = Math.floor()
// console.log(numeroGanador)

while(true){
const numero = input ("Escribe un numero y haber si aciertas ==> ")
console.log("DEBUG: " + numero);

if (numero == numeroGanador){
    console.log("Has ganado enhorabuena")
    break
}else if (numero < numeroGanador){
    console.log("mas alto")
}else{
    console.log("mas bajo")
}
}

