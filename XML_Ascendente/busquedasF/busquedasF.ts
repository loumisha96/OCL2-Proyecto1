
var pruebaDeQuery=['/','/','fechaPublicacion','[','@','año','>','1970',']','/','.','.','/','titulo',']']
function recorreTablaExpresiones(objeto:any,tabla:Array<EntornoXML>) {//envia una objeto a buscar y su tabla de simbolos(objetos)
    if(tabla!=undefined){
    tabla.forEach((element)=>{
        
        if(element.id==objeto){//SI LO ENCUENTRA
            if(element.id==element.EtiquetaCierre){// SI EL ELEMENTO ES DOBLE TIPO <TITULO>"TEXTO"</TITULO>
                //if(element.tablaSimbolos.length!=0){// SI EL ELEMENTO TIENE MAS ENTORNOS EN SU INTERIOR

    
                //}else{// SI EL ELEMENTO NO TIENE MAS ENTORNO EN SU INTERIOR
                    if(element.texto!=""){// SI EL ELEMENTO NO TIENE MAS ENTORNOS EN SU INTERIOR <---- DOBLE VALIDACION 
                        if(element.tablaSimbolos.length!=0){//SI EL ELEMENTO TIENE ATRIBUTOS
                            
                        }else{// SI EL ELEMENTO NO TIENE ATRIBUTOS
                            console.log("<"+element.id+">"+element.texto+"</"+element.EtiquetaCierre+">")
                        }
                        
                    }else{//SI EL ELEMENTO TIENE MAS ENTORNOS EN SU INTERIOR <---- DOBLE VALIDACION

                    }
                
               // } 
            }else{// SI EL ELEMENTO ES TIPO <TITULO --PARAMETROS-- />
                if(element.tablaSimbolos.length>0){//SI EL ELEMENTO TIENE ATRIBUTOS
                            
                }else{// SI EL ELEMENTO NO TIENE ATRIBUTOS
                   //AQUI NO DEBERIA ENTRAR JAJA CREO QUE SERIA ERROR SINTACTICO
                   // console.log("<"+element.id+">"+element.texto+"</"+element.EtiquetaCierre+">")
                }
            }
           // recorreTabla()
            
           // console.log(element.tablaEntornos)
        }else{//SI NO LO ENCUENTRA PASA AL SIGUIENTE ENTORNO
            recorreTabla(objeto,element.tablaEntornos)
               
            }
        
      
    })
    }
}
///////////////////////////---> PRUEBA FUNCION PARA BUSQUEDAS TIPO /BIBLIOTECA/LIBROS
function llenarElementosExperesiones(tabla:Array<EntornoXML>) {
    
    if(tabla!=undefined){
    tabla.forEach((element)=>{
        if(element.id==element.EtiquetaCierre){
             if(element.tablaSimbolos.length!=0){// SI EL ELEMENTO TIENE MAS ENTORNOS EN SU INTERIOR
    
                }else{
                if(element.texto!=""){
                    console.log("<"+element.id+">"+element.texto+"</"+element.EtiquetaCierre+">")
                }
            
            }
        }else{

        }

    })
}
}