"use strict";
class EntornoXML {
    constructor(id, texto, linea, columna, tablaSimbolos, tablaEntornos, EtiquetaCierre) {
        this.id = id;
        this.texto = texto;
        this.linea = linea;
        this.columna = columna;
        this.tablaSimbolos = tablaSimbolos;
        this.tablaEntornos = tablaEntornos;
        // this.entorno = new EntornoXML(null);
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
    getTablaEntornos() {
        return this.tablaEntornos;
    }
    getTablaSimbolos() {
        return this.tablaSimbolos;
    }
    getEtiquetaCierre() {
        return this.EtiquetaCierre;
    }
}
