


export class attribute{
    name:string;
    value:any;
    constructor(name:string,value:any){
        this.name= name;
        this.value = value;
    }
}

export class nodo {
    name:string="";
    
    children:Array<nodo>;
    constructor(name:string,children:Array<nodo>){
        this.name = name;
        this.children=children;
    };
    

    
}