"use strict";
exports.__esModule = true;
exports.Profesor = void 0;
var Alumno_1 = require("./Alumno");
var Profesor = /** @class */ (function () {
    function Profesor(nombre) {
        this.alumnos = [new Alumno_1.Alumno("Enzo", 7), new Alumno_1.Alumno("Gena", 8), new Alumno_1.Alumno("Flor", 10)];
        this.nombre = nombre;
    }
    return Profesor;
}());
exports.Profesor = Profesor;
