//Ejercicio Vueltas
var ReadlineSync = require("readline-sync");
var vueltas = 4;
var tiempoTotal = 0;
for (var x = 0; x < vueltas; x++) {
    var tiempoVuelta = parseInt(ReadlineSync.question("Indique el tiempo de vuelta:  "));
    tiempoTotal +=tiempoVuelta;
}

console.log("El tiempo total del piloto es: ", tiempoTotal);