

class ListaReproduccion{
    private pista: string;
    private listaReproduccion: ListaReproduccion[]= [];

    constructor(pista: string){
        this.pista = pista;
        }


    agregarPistas(pista): void{
        this.listaReproduccion.push(pista);
    }

    eliminarPistas(pista){
        this.listaReproduccion.splice(pista);
    }

}
