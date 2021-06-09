"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Entorno_1 = require("./AST/Entorno");
var gramatica = require('./Gramatica/gramatica');
function ejecutarCodigo(entrada) {
    var objetos = gramatica.parse(entrada);
    var entornoGlobal = new Entorno_1.Entorno(null);
    //const ast:AST = new AST(instrucciones);
    //instrucciones.forEach((element:Instruccion) => {
    //    element.ejecutar(entornoGlobal,ast);
    //});
}
ejecutarCodigo("\n    print(1);\n    print(true);\n    print(\"hola mundo\");\n");
//# sourceMappingURL=index.js.map