import { Pc } from "./pc";

class Notebook extends Pc{

    private bateriaActual: number;

    constructor(nombre:string,marca: string, modelo:number, almacenamiento: number, bateriaActual: number){
       super(nombre,marca,modelo,almacenamiento);
       this.bateriaActual = bateriaActual;
    }

    
    public getAlmacenamiento(): number {
        return super.getAlmacenamiento( ) + 128;
    }
    
    public cargarBateria(): void {
        if(this.bateriaActual > 5) {
            console.log("Tiene que cargar la bateria");


}}}