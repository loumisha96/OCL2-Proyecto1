"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Objeto {
    constructor(id, texto, linea, columna, listaAtributos, listaObjetos) {
        this.id = id;
        this.texto = texto;
        this.linea = linea;
        this.columna = columna;
        this.listaAtributos = listaAtributos;
        this.listaObjetos = listaObjetos;
    }
    getId() {
        return this.id;
    }
    getTexto() {
        return this.texto;
    }
    getLinea() {
        return this.linea;
    }
    getColumna() {
        return this.columna;
    }
    getListaObjetos() {
        return this.listaObjetos;
    }
    getListaAtributo() {
        return this.listaAtributos;
    }
}
