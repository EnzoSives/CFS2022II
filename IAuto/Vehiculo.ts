export abstract class Vehiculo{

    private encendido: boolean;
    private apagado: boolean;
    private VelocidadActual: number;

    public constructor(encendido: boolean, VelocidadActual: number) {
        this.encendido = encendido;
        this.VelocidadActual = VelocidadActual;
    }

abstract acelerar(): string;

public encerder(encendido: boolean) {
    if(encendido == false){
        encendido = true;
    }}


public apagar(encendido: boolean){
    if(encendido == true){
        encendido = false;
    }}
}

