class busqueda{
    
    //list_nodos:Array<nodo>;
    tabla:Array<EntornoXML>
    constructor(tabla:Array<EntornoXML>){
      //  this.list_nodos=new Array();
      this.tabla=tabla;
    }

    RecorrerAst(padre:nodo){
        if (padre.name!=null){
            console.log(padre.name)
            for (const n in padre.children){//si el nodo padre tiene hijos
                this.RecorrerChildren(padre.children[n],this.tabla)
            }
                
        }
        
    }
    
    RecorrerChildren(actual:nodo,tablaActual:Array<EntornoXML>){
        if(actual.children !=undefined){//tiene hijos
            console.log(actual.name)
            for(const child in actual.children){
                if (actual.children[child].children != undefined)
                        console.log(actual.children[child].name)
                else{
                    console.log(actual.children[child])
                    this.Busqueda(actual.children[child],tablaActual)
                }
                this.RecorrerChildren(actual.children[child],tablaActual)
            }

        }
    }
    
    Busqueda(objeto:nodo,tablaActual:Array<EntornoXML>) {
        if(tabla!=undefined){
            if(objeto.name=="/"){//si es /|//|id
               // this.getNodos(tabla, objeto)
            }else if (objeto.name=="//"){

            }else{
                console.log("es id")
                this.recorrerTablaId(objeto.name,this.tabla);
            }
                
                
        }
    }
    getNodos(tablatabla:Array<EntornoXML>, objeto:string):any{
     /* switch (objeto.) {
          case :
              
              break;
      
          default:
              break;
      }*/
    }
    recorrerTablaId(id:string, tablaActual:Array<EntornoXML>):any{
        tablaActual.forEach((element)=>{
                    
            if(element.id==id){
                if(element.id==element.EtiquetaCierre){
                    if(element.tablaSimbolos.length!=0){
        
                    }else{
                        if(element.texto!=""){
                            console.log("<"+element.id+">"+element.texto+"</"+element.EtiquetaCierre+">")
                        }
                    
                    }
                }else{
        
                }
                llenarElementos(element.tablaEntornos)
            // console.log(element.tablaEntornos)
            }else{
                    
                    this.recorrerTablaId(id,element.tablaEntornos)
                }
            
        
            })
    }
    getId(){

    }


}