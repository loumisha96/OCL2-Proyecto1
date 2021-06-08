"use strict";
class Primitivo {
    constructor(valor, linea, columna) {
        this.linea = linea;
        this.columna = columna;
        this.valor = valor;
    }
    getTipo(ent, arbol) {
        const valor = this.getValorImplicito(ent, arbol);
        if (typeof (valor) === 'boolean') {
            return 'boolean';
        }
        else if (typeof (valor) === 'string') {
            return 'string';
        }
        else if (typeof (valor) === 'number') {
            if (this.isInt(Number(valor))) {
                return 'number';
            }
            return 'double';
        }
        else if (valor === null) {
            return 'null';
        }
        return 'void';
    }
    getValorImplicito(ent, arbol) {
        return this.valor;
    }
    isInt(n) {
        return Number(n) === n && n % 1 === 0;
    }
}
