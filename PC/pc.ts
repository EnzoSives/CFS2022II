

export class Pc{
    protected nombre: string;
    protected marca: string;
    protected modelo: number;
    protected almacenamiento: number;
    private encendido: boolean;

    constructor(nombre: string, marca: string, modelo:number, almacenamiento: number) {
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.almacenamiento = almacenamiento;
    }

    public prender(): void {
        console.log("Su  esta encendida");
    }

    public reiniciar(): void {
        console.log("Su pc se reiniciara en 10 segundos");
    }

    public apagar(encendido: boolean): void {
        encendido = encendido || false;
    }
    
    
    public getNombre(): string {
        return this.nombre;
    }

    public getMarca(): string {
        return this.marca;
        }

    public getModelo(): number {
        return this.modelo;
    }
    public getAlmacenamiento(): number{
        return this.almacenamiento;
    }

}