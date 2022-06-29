import { Consola } from "./claseConsola";

export class Ps4{
    
    modelo: Consola;
    capacidad: number;
    juego: Juego;
    encendido: boolean;

constructor(modelo:Consola, capacidad:number, juego:Juego, encendido:boolean ){

    this.modelo = modelo;
    this.capacidad = capacidad;
    this.juego = juego;
    this.encendido = encendido;
}}


export class Juego{
    
    nombre:string;
    tipo: boolean;
    genero: string;
    peso: number;

constructor(nombre: string, tipo:boolean, genero:string, peso:number){
    this.nombre = nombre;
    this.tipo = tipo;
    this.genero = genero;
    this.peso = peso;
}

tipoJuego(){
    if(this.tipo = true)
    console.log("Fisico");
    else console.log("Digital");
}}




