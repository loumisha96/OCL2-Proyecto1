"use strict";
//import { nodo } from "../AST/nodo";
var busqueda = /** @class */ (function () {
    function busqueda() {
        this.list_nodos = new Array();
        this.lista_query = new Array();
    }
    busqueda.prototype.getNodos = function (name_nodo) {
        return this.list_nodos;
    };
    busqueda.prototype.restrictNodos = function () {
        return this.list_nodos;
    };
    busqueda.prototype.getSelection = function () {
    };
    return busqueda;
}());
//# sourceMappingURL=busqueda.js.map