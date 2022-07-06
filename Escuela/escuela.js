"use strict";
exports.__esModule = true;
var Alumno_1 = require("./Alumno");
var profesor_1 = require("./profesor");
var Escuela = /** @class */ (function () {
    function Escuela(nombre) {
        this.profesores = [new profesor_1.Profesor("Esteban"), new profesor_1.Profesor("Gerardo")];
        this.alumnos = [new Alumno_1.Alumno("Enzo", 3)];
        this.nombre = nombre;
    }
    Escuela.prototype.agregarAlumnos = function (alumno) {
        this.alumnos.push(alumno);
    };
    Escuela.prototype.eliminarAlumno = function (alumno) {
        this.alumnos.splice(this.alumnos.indexOf(alumno));
    };
    Escuela.prototype.agregarProfesor = function (profesor) {
        this.profesores.push(profesor);
    };
    Escuela.prototype.eliminarProfesor = function (profesor) {
        this.profesores.splice(this.profesores.indexOf(profesor));
    };
    return Escuela;
}());
