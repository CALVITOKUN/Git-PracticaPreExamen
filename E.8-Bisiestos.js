const input = require ("prompt-sync")({ sigint:true})


const PideAños = input ("Introduce el año y te dire si es bisiesto o no ==> ")
// console.log("DEBUG: " + PideAños);

const esBisiesto = ((PideAños%400 === 0) || 
(PideAños%4 === 0) && (PideAños%100 !== 0))

if (esBisiesto){
    console.log("El año insertado si es bisiesto")
} else {
    console.log("El año insertado no es bisiesto")
}