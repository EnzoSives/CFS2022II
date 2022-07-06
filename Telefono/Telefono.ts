import * as ReadlineSync from "readline-sync";

export class Telefono{
    
    private estaPrendido:boolean;
    private bateriaActual: number;

    constructor(){}

    public mandarMensaje(){
        let mensaje= ReadlineSync.question("Que mensaje desea enviar?:");
        console.log("Su mensaje se ha enviado correctamente")
    }



    
}