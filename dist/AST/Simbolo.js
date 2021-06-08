"use strict";
class Simbolo {
    constructor(tipo, id, linea, columna, valor, Entorno, TablaSimbolos) {
        this.id = id;
        this.linea = linea;
        this.columna = columna;
        this.tipo = tipo;
        this.valor = valor;
        this.Entorno = Entorno;
        this.TablaSimbolos = TablaSimbolos;
    }
    getTipo(ent, arbol) {
        return this.tipo;
    }
    getValorImplicito(ent, arbol) {
        return this.valor;
    }
}
