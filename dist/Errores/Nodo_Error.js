"use strict";
class NodoError {
    constructor(tipo, analizador, descripcion, linea, columna) {
        this.tipo = tipo;
        this.analizador = analizador;
        this.descripcion = descripcion;
        this.linea = (linea + 1);
        this.columna = (columna + 1);
    }
    gettipo() {
        return this.tipo;
    }
    getAnalizador() {
        return this.analizador;
    }
    getdescripcion() {
        return this.descripcion;
    }
    getlinea() {
        return this.linea;
    }
    getcolumna() {
        return this.columna;
    }
}
