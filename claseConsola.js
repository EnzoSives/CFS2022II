"use strict";
exports.__esModule = true;
exports.Consola = void 0;
var clasePs4_1 = require("./clasePs4");
var Consola = /** @class */ (function () {
    function Consola(marca, modelo, capacidad, juegos, encendido) {
        this.marca = marca;
        this.modelo = modelo;
        this.capacidad = capacidad;
        this.juegos = juegos;
        this.encendido = encendido;
    }
    Consola.prototype.encender = function () {
        if (this.encendido == false)
            console.log("Su consola esta apagada");
        else
            console.log("Su consola se encuentra prendida");
    };
    Consola.prototype.juegoActual = function () {
        if (this.encendido = true)
            console.log("Esta jugando: ", this.juegos.nombre);
        else
            console.log("Su consola se encuentra apagada");
    };
    return Consola;
}());
exports.Consola = Consola;
var juego1 = new clasePs4_1.Juego("Fifa", true, "futbol", 30);
var juego2 = new clasePs4_1.Juego("Fornite", false, "Disparos", 70);
var ps4 = new Consola("Sony", "Slim", 1000, juego1, true);
var xbox = new Consola("Microsoft", "Slim", 500, juego2, false);
//Consola Xbox
xbox.encender();
xbox.juegoActual();
//Consola Ps4
ps4.encender();
ps4.juegoActual();
