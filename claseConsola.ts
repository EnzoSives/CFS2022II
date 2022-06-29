import { Juego } from "./clasePs4";
import { Ps4 } from "./clasePs4";

export class Consola{

    marca: string;
    modelo: string;
    capacidad: number;
    juegos:Juego;
    encendido: boolean;

    constructor (marca:string, modelo:string, capacidad:number, juegos:Juego, encendido: boolean ){
        this.marca = marca;
        this.modelo = modelo;
        this.capacidad = capacidad;
        this.juegos = juegos;
        this.encendido = encendido;
    }

    encender(){
        if (this.encendido == false)
            console.log("Su consola esta apagada");
        else console.log("Su consola se encuentra prendida");
    }
    juegoActual(){
        if (this.encendido = true)
        console.log("Esta jugando: " , this.juegos.nombre);
        else console.log("Su consola se encuentra apagada");
}}
let juego1 = new Juego("Fifa", true, "futbol", 30);
let juego2 = new Juego("Fornite", false, "Disparos", 70 );
let ps4 = new Consola("Sony","Slim",1000, juego1, true);
let xbox = new Consola("Microsoft","Slim",500, juego2 , false);

//Consola Xbox
xbox.encender();
xbox.juegoActual();

//Consola Ps4
ps4.encender();
ps4.juegoActual();


