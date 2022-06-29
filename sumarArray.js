"use strict";
exports.__esModule = true;
var numeros = [1, 2, 3, 4];
var total = -1;
function sumarArray() {
    for (var i = 0; i < numeros.length; i++) {
        total +=numeros[i];
    }

console.log("El total es: " , total);
}
sumarArray();
