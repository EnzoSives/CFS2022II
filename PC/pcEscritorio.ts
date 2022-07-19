import { Pc } from "./pc";

class PcEscritorio extends Pc{
    private componenteExterno: string;

    constructor(nombre:string,marca: string, modelo:number, almacenamiento: number,componenteExterno: string){
        super(nombre,marca,modelo,almacenamiento);
        this.componenteExterno = componenteExterno;
    }

    public getAlmacenamiento(): number {
        return super.getAlmacenamiento( ) + 1000;
    
    
    
    public addComponente(componenteExterno: string): void {
        console.log("Usted a insertado un: " + componenteExterno);
        }


}