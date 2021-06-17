class Atributo{
    id:string;
    valor:string;
    linea: number;
    columna: number;
    entornoAnterior:any;

    constructor(id:string, valor:string, linea:number, columna:number,entornoAnterior:any){
        this.id = id;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
        this.entornoAnterior=entornoAnterior;
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