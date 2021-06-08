"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entorno_1 = require("./AST/Entorno");
const gramatica = require('./Gramatica/gramatica');
function ejecutarCodigo(entrada) {
    const objetos = gramatica.parse(entrada);
    const entornoGlobal = new Entorno_1.Entorno(null);
    //const ast:AST = new AST(instrucciones);
    //instrucciones.forEach((element:Instruccion) => {
    //    element.ejecutar(entornoGlobal,ast);
    //});
}
ejecutarCodigo(`
    print(1);
    print(true);
    print("hola mundo");
`);
