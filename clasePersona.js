var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, dni, edad, sexo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.edad = edad;
        this.sexo = sexo;
    }
    Persona.prototype.presentacion = function () {
        console.log("Hola me llamo: ", this.nombre);
    };
    Persona.prototype.mayorEdad = function () {
        if (this.edad < 18)
            console.log("Es menor de edad");
        else
            console.log("Es mayor de edad");
    };
    return Persona;
}());
var persona1 = new Persona("Enzo", "Sives", 39828565, 25, "Masculino");


persona1.presentacion();
persona1.mayorEdad();
