export class Alumno{
    nombre: string;
    nota: number;
    

    constructor(nombre: string, nota:number, ){
        this.nombre = nombre;
        this.nota = nota;
        
    }

    aprobadoDesaprobado(){
        if (this.nota >= 7)
            console.log("Aprobado");
        else console.log("Desaprobado");
    }
}  