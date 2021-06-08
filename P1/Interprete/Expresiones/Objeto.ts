import { Atributo } from "./Atributo";

class Objeto{
    id:string;
    texto:string;
    listaAtributos:Array<Atributo>;
    listaObjetos: Array<Objeto>;
    linea: number;
    columna: number;

    constructor(id:string, texto:string, linea:number, columna:number, listaAtributos:Array<Atributo>, listaObjetos:Array<Objeto>){
        this.id = id;
        this.texto = texto;
        this.linea = linea;
        this.columna = columna;
        this.listaAtributos = listaAtributos;
        this.listaObjetos = listaObjetos
    }
    getId() {
        return this.id;
    }
    getTexto() {
        return this.texto;
    }
    getLinea() {
        return this.linea;
    }
    getColumna() {
        return this.columna;
    }
    getListaObjetos() {
        return this.listaObjetos;
    }
    getListaAtributo() {
        return this.listaAtributos;
    }
}