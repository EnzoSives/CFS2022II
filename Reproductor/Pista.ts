class Pista {
    private id : number;
    private titulo: string;
    private duracion:number;
    private interprete : string;

    constructor(id: number, titulo: string, duracion:number, interprete: string) {
        this.id = id;
        this.titulo = titulo;  
        this.duracion = duracion;
        this.interprete = interprete;

    }
}