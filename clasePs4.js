"use strict";
exports.__esModule = true;
exports.Juego = exports.Ps4 = void 0;
var Ps4 = /** @class */ (function () {
    function Ps4(modelo, capacidad, juego, encendido) {
        this.modelo = modelo;
        this.capacidad = capacidad;
        this.juego = juego;
        this.encendido = encendido;
    }
    return Ps4;
}());
exports.Ps4 = Ps4;
var Juego = /** @class */ (function () {
    function Juego(nombre, tipo, genero, peso) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.genero = genero;
        this.peso = peso;
    }
    Juego.prototype.tipoJuego = function () {
        if (this.tipo = true)
            console.log("Fisico");
        else
            console.log("Digital");
    };
    return Juego;
}());
exports.Juego = Juego;
