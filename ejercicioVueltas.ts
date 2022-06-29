//Ejercicio Vueltas

import * as ReadlineSync from "readline-sync";


let vueltas : number = 4;
let tiempoTotal = 0;


for (let x = 0; x <= vueltas; x++ ){
    let tiempoVuelta= ReadlineSync.question("Indique el tiempo de vuelta ");
    tiempoTotal=+tiempoVuelta;
}
console.log(tiempoTotal);

