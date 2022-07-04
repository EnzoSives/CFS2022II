import { Alumno } from "./Alumno";

export class Profesor{
    nombre : string;
    alumnos: Alumno[] = [new Alumno("Enzo", 7), new Alumno("Gena",8),new Alumno("Flor", 10)];

    constructor(nombre: string){
        this.nombre = nombre;
    }

    
    
}