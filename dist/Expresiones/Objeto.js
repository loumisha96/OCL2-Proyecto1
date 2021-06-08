"use strict";
class Objeto {
    constructor(id, texto, linea, columna, listaAtributos, listaObjetos, EtiquetaCierre) {
        this.id = id;
        this.texto = texto;
        this.linea = linea;
        this.columna = columna;
        this.listaAtributos = listaAtributos;
        this.listaObjetos = listaObjetos;
        this.entorno = new Entorno(null);
        this.EtiquetaCierre = EtiquetaCierre;
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
    getEtiquetaCierre() {
        return this.EtiquetaCierre;
    }
}
