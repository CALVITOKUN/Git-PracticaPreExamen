const input = require("prompt-sync")({sigint: true});

let esCancelar = false;


while (!esCancelar){
    const numero = input("Escribe el numero o escribe cancelar ==> ")

    if(numero.toLowerCase() === "cancelar"){
        break;
    }

    //metemos la funcion para saber si es par o no
    if(validacion(numero)){
        console.log("Es un numero Par")
    }else{
        console.log("Es un numero Impar")
    }
    

}



//funcion de validacion

function validacion(numero){
    if (numero%2 === 0){
        return(true)
    }else{
        return(false)
    }
}