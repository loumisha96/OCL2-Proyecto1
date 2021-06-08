"use strict";
class Simbolo {
    //TablaSimbolos: Array<Simbolo>;
    // hijos:number;
    constructor(tipo, id, linea, columna, valor, Entorno) {
        this.id = id;
        this.linea = linea;
        this.columna = columna;
        this.tipo = tipo;
        this.valor = valor;
        this.Entorno = Entorno;
        //this.TablaSimbolos=TablaSimbolos;
        //his.hijos=hijos;
    }
    getTipo(ent, arbol) {
        return this.tipo;
    }
    getValorImplicito(ent, arbol) {
        return this.valor;
    }
}
