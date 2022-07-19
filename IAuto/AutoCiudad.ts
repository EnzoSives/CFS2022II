import { Vehiculo } from "./Vehiculo";


class AutoCiudad extends Vehiculo{
    
    private recorridoKM: number;


    constructor(encendido: boolean, VelocidadActual: number,recorridoKM: number) {
        super(encendido,VelocidadActual);
        this.recorridoKM = recorridoKM;
    }

    acelerar(VelocidadActual: number) {
        if(VelocidadActual === 0){
            return console.log("Acelerando");
            
        }
        
    }

}