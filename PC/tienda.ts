import { Pc } from "./pc";

class Tienda{

    private computadoras: Pc[];

    constructor(){
        
    }

    comprobarAlmacenamiento(computadoras:Pc): string{
        return this.computadoras.getAlmacenamiento();



    }
}