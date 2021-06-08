"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atributo = void 0;
class Atributo {
    constructor(id, valor, linea, columna) {
        this.id = id;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    getId() {
        return this.id;
    }
    getValor() {
        return this.valor;
    }
    getLinea() {
        return this.linea;
    }
    getColumna() {
        return this.columna;
    }
}
exports.Atributo = Atributo;
