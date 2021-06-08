"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tree = void 0;
var nodo_1 = require("./nodo");
var tree = /** @class */ (function () {
    function tree() {
        var lis = new Array();
        this.padre = new nodo_1.nodo("", lis);
        this.padre.name = "tree";
    }
    ;
    return tree;
}());
exports.tree = tree;
