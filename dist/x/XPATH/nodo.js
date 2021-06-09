"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodo = exports.attribute = void 0;
class attribute {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}
exports.attribute = attribute;
class nodo {
    constructor(name, children) {
        this.name = "";
        this.name = name;
        this.children = children;
    }
    ;
}
exports.nodo = nodo;
