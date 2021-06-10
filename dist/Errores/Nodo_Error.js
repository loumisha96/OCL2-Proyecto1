"use strict";
class NodoError {
    constructor(tipo, descripcion, linea, columna) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.linea = (linea + 1);
        this.columna = (columna + 1);
    }
    gettipo() {
        return this.tipo;
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
