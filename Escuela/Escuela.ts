import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";

class Escuela{
    nombre:string;
    profesores: Profesor[]=[new Profesor("Esteban"), new Profesor("Gerardo")];
    alumnos: Alumno[] = [new Alumno("Enzo", 3)];

    constructor(nombre:string){
        this.nombre = nombre;
    }

    agregarAlumnos(alumno:Alumno){
        this.alumnos.push(alumno);
    }

    eliminarAlumno(alumno:Alumno){
        this.alumnos.splice(this.alumnos.indexOf(alumno));
    }

    agregarProfesor(profesor:Profesor){
        this.profesores.push(profesor);
    }

    eliminarProfesor(profesor:Profesor){
        this.profesores.splice(this.profesores.indexOf(profesor));
    }
}