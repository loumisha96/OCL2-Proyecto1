"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Objeto = /** @class */ (function () {
    function Objeto(id, texto, linea, columna, listaAtributos, listaObjetos) {
        this.id = id;
        this.texto = texto;
        this.linea = linea;
        this.columna = columna;
        this.listaAtributos = listaAtributos;
        this.listaObjetos = listaObjetos;
    }
    Objeto.prototype.getId = function () {
        return this.id;
    };
    Objeto.prototype.getTexto = function () {
        return this.texto;
    };
    Objeto.prototype.getLinea = function () {
        return this.linea;
    };
    Objeto.prototype.getColumna = function () {
        return this.columna;
    };
    Objeto.prototype.getListaObjetos = function () {
        return this.listaObjetos;
    };
    Objeto.prototype.getListaAtributo = function () {
        return this.listaAtributos;
    };
    return Objeto;
}());
