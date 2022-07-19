import { Telefono } from "./Telefono";

class SmartPhone implements Telefono {
    private estaPrendido: boolean;


    constructor() {
        this.estaPrendido;
    }
    sacarFoto(): void {
        console.log("Sacando Foto");
        
    }
    public llamar(numero: number) {
        console.log("Llamando a : " + numero)
       }

    public prender(): void {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
    }

    public apagar(): void {
        if(this.estaPrendido == true) {
            this.estaPrendido = false;
    }

    

    
}}