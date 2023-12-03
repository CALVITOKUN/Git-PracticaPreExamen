const imput = require("prompt-sync")({sigint: true});

let cancelar = false
let cadenaImp = ""
let cadena = ""

while (!cancelar) {
    cadenaImp = imput ("Escribe texto para que sea concatenado ==> ")

    if(cadenaImp.toLowerCase() === "cancelar"){
        break
    }
    cadena = cadena + cadenaImp + "-"
} 
cadena = cadena.slice(0,-1) //cogemeos la cadena y le decimos que a la ultima posicion no le ponga el guion para que no se vea detras
console.log("El texto a que dado asi ==> " + cadena);

