

class Simbolo  {
    public id: string;
    public valor: any;
    private tipo: any;
    linea: number;
    columna: number;
    Entorno: string;
    //TablaSimbolos: Array<Simbolo>;
   // hijos:number;

    constructor(tipo:any, id:string, linea:number, columna:number, valor:any,Entorno: string){//,TablaSimbolos:Array<Simbolo>,hijos:number){
        this.id= id;
        this.linea = linea;
        this.columna = columna;
        this.tipo = tipo;
        this.valor=valor;
        this.Entorno=Entorno;
        //this.TablaSimbolos=TablaSimbolos;
        //his.hijos=hijos;

    }

    getTipo(ent: any, arbol: any): any{
        return this.tipo;
    }
    getValorImplicito(ent: any, arbol: any) {
        return this.valor;
    }
    
}
