const imput = require("prompt-sync")({sigint: true});

const Nota = imput("Escriba su nota para saber su calificacion ==> ");
// console.log("DEBUG: " + Nota); comprobacion de salida por pantalla


if (Nota >= 0 && Nota <3 ){
    console.log("Tu nota es un Muy deficiente")    
 } else if (Nota >=3 && Nota <5 ){
    console.log("Tu nota es un Insuficiente")
 } else if (Nota >=5  && Nota <6 ){
    console.log("Tu nota es un Suficiente")
 } else if (Nota >=6 && Nota <7 ){
    console.log("Tu nota es un Bien")
 } else if (Nota >=7 && Nota <9 ){
    console.log("Tu nota es un Notable")
 } else if(Nota >=9 && Nota == 10 ){
    console.log("Tu nota es un Sobresaliente")
 }