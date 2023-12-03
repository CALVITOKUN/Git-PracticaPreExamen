const input = require("prompt-sync")({sigint: true});
let Gpata = 200;
let cebolla = 60;
let Nhuevos = 1;
let GpataT
let cebollaT
let huevosT
let botella = 0.5

const numerocomensales = input("Cuantos comensales van a ser ? ")
const numeroCebollistas= getnumerocebollistas(numerocomensales)
let numerosincebollistas

if (!numeroCebollistas){
    
} else {
    numerosincebollistas = (numerocomensales - numeroCebollistas)
}

CalcularIngredientesTotales(numerocomensales,numeroCebollistas)

console.log("se necesitaran ==> " + " Patatas "+ GpataT + "g" 
+ " Cebollas " +  cebollaT + "g" + " huevos " + huevosT + " y " 
+ botellasnecesarias + " botellas de vino")



//Funciones

function CalcularIngredientesTotales(numerocomensales,numeroCebollistas){
    GpataT = Gpata * numerocomensales
    cebollaT = cebolla * numeroCebollistas
    huevosT = Nhuevos * numerocomensales
    botellasnecesarias = Math.ceil(numerocomensales * botella)
}


function getnumerocebollistas(numerocomensales){
    const numeroCebollistas = input ("¿Cuantos comen cebolla?")
    if (numerocomensales < numeroCebollistas){
        return false
    }
    return numeroCebollistas
}