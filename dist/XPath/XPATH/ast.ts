import { nodo } from "./nodo";
export class tree {
    padre:nodo;
    
    constructor(){
        let lis = new Array();
        this.padre=new nodo("",lis);
        this.padre.name="tree";
        
    };
}