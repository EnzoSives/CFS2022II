"use strict";
exports.__esModule = true;
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }
    Alumno.prototype.aprobadoDesaprobado = function () {
        if (this.nota >= 7)
            console.log("Aprobado");
        else
            console.log("Desaprobado");
    };
    return Alumno;
}());
exports.Alumno = Alumno;
