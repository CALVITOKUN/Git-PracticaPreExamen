const scanner = require("prompt-sync")({sigint: true});

const Nombre = scanner("Introduce tu nombre y apellidos ==> ");
// console.log("DEBUG: " + Nombre); comprobacion de salida por pantalla

const Edad = scanner("Introduce tu edad ==> ")
// console.log("DEBUG: " + Edad); comprobacion de salida por pantalla

if (Edad<18){
    console.log("No puedes sacarte el carnet de conducir eres menor de Edad")
}else{
    console.log("Ya puedes sacarte el carnet de conducir")
}