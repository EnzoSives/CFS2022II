import { Futbolista } from "./futbolista";
import { Persona } from "./persona";

export class Entrenador extends Persona{
    protected jugadores: Futbolista[];
    protected titular:boolean;

    constructor(){
        super("enzo","river", 23, 23, 12222);

    }

    public dirigir(){
        console.log("Dirigiendo");
    }

    public entrenar(){
        console.log("Entrenando");
    }

    public planificar(){
        console.log("Planificando");
    }
}