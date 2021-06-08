"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tree = void 0;
const nodo_1 = require("./nodo");
class tree {
    constructor() {
        let lis = new Array();
        this.padre = new nodo_1.nodo("", lis);
        this.padre.name = "tree";
    }
    ;
}
exports.tree = tree;
