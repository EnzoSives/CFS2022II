export class Persona{
    protected nombre:string;
    protected equipo:string;
    protected edad:number;
    protected antiguedad:number;
    protected sueldo:number;

    constructor(nombre, equipo,edad,antiguedad,sueldo){
        this.nombre = nombre;
        this.equipo = equipo;
        this.edad = edad;
        this.antiguedad = antiguedad;
        this.sueldo = sueldo;
    }

    hablar(){
        console.log("Hola");
    }
    concentrarse(){
        console.log("Estoy concentrado")
    }
}