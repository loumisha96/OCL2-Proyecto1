"use strict";
exports.__esModule = true;
exports.nodo = exports.attribute = void 0;
var attribute = /** @class */ (function () {
    function attribute(name, value) {
        this.name = name;
        this.value = value;
    }
    return attribute;
}());
exports.attribute = attribute;
var nodo = /** @class */ (function () {
    function nodo(name, children) {
        this.name = "";
        this.name = name;
        this.children = children;
    }
    ;
    return nodo;
}());
exports.nodo = nodo;
