

class Persona{

    nombre : string;
    apellido: string;
    dni: number;
    edad: number;
    sexo: string;



    constructor(nombre:string, apellido:string, dni:number, edad:number, sexo:string){
        this.nombre= nombre;
        this.apellido= apellido;
        this.dni= dni;
        this.edad = edad;
        this.sexo= sexo;
    }

    presentacion(){
        console.log("Hola me llamo: ", this.nombre);
    }

    mayorEdad(){
        if (this.edad < 18)
        console.log("Es menor de edad");
        else
        console.log("Es mayor de edad");
    }
    
}
let persona1 = new Persona("Enzo","Sives",39828565,25,"Masculino");


persona1.presentacion();
persona1.mayorEdad();



