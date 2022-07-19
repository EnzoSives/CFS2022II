import { Libro } from "./libro";

export class Gestor{

    private libros: string[];

    constructor(libros: string[]){
        this.libros = libros;
    }

    insertarLibro(libro: string){
        this.libros.push(libro);

    }

    verLibro(libro: string){
        for (let i = 0; i < this.libros.length; i++) {
            if (this.libros[i] == libro) {
                console.log(this.libros[i]);}
            }}
    
    //modificarLibro(libro: string): void {}

    eliminarLibro(libro: string){
        this.libros.splice(this.libros.indexOf(libro));
    }
    


    }
