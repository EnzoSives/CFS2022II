import { Persona } from "./persona";

export class Futbolista extends Persona{
    protected posicion:string;
    protected pie: string;
    protected numero:number;
    protected goles:number;

    constructor(posicion:string, pie:string, numero:number, goles:number) {
        super("enzo","river",67,67,67);
        this.posicion = posicion;
        this.pie = pie;
        this.numero = numero;
        this.goles = goles;


    }

    public entrenar(){
        console.log("Estoy entrenando");
    }

    public hacerGol(){
        console.log("GOOOOOL");
    }

    public jugar(){
        console.log("Estoy jugando");
    }

    public atajar(posicion){
        if(posicion = "Arquero")
        console.log("Es arquero");
    }

    public hacerFalta(){
        console.log("Hice falta");
    }

}