const imput = require("prompt-sync")({sigint: true});

let cadena = false;
let numImput = ""
let num
let Suma = 0

while(!cadena){
    numImput = imput("Introduzca un numero o cancele escribiendo (cancelar) ==> ")

    if (Number(numImput)){
        num = Number(numImput)
        Suma += num
    }else if (numImput !== 'cancelar'){
        console.log("No entiendo, introduzca un numero valido ==> ")
    }else{
        cadena = true
    }
    
}

console.log("La suma total es ==> " + Suma)