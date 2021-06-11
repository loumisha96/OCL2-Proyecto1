
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
