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
    Simbolo.prototype.getTipo = function (ent, arbol) {
        return this.tipo;
    };
    Simbolo.prototype.getValorImplicito = function (ent, arbol) {
        return this.valor;
    };
    return Simbolo;
}());
//# sourceMappingURL=Simbolo.js.map