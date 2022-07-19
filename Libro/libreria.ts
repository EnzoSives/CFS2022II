import * as fs from 'fs';

let libro: string = fs.readFileSync("libro.txt", "utf8");

let leerLibro: string[] = libro.split(" ");

console.log(leerLibro);
