import { Futbolista } from "./futbolista";
import { Persona } from "./persona";

export class Masajista extends Persona{
    protected clientes: Futbolista[];


    public masajear(){
        console.log("Estoy masajeando");
    }

    public rehabilitar(){
        console.log("Reabilitando");
    }
}
