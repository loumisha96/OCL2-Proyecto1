
    var CSTAcadena="";
    var i:number;
    function CSTA(Nodos:any){
    
        var padre = "nodo"+i;
        
        try {
            var rem=Nodos.texto.toString().replace('"','');
            var reme=rem.replace('"','');
        CSTAcadena +=""+ padre+ " [label =\""+i+") Etiqueta: "+Nodos.tipo+"  Valor:" + reme+"\"]  ";
        i=i + 1;
        //cadena+= padre +"->"+"nodo"+(i)+ "\n";
    //}
        for (let index = 0; index < Nodos.hijos.length; index++) {
        //console.log(Nodos.hijos[index].descripcion.toString());
      //  if((Nodos.descripcion.toString()!="")){
            CSTAcadena= CSTAcadena + padre +"->"+"nodo"+(i)+ " ";
          
      //  }
           // if((Nodos.hijos[index].descripcion.toString()!="")){ 
    
            
            CSTA(Nodos.hijos[index]);
        //}
        } 
        } catch (error) {
            console.log(error);
        }
         
       
       // if((Nodos.descripcion.toString()!="")){
         
        //console.log(cadena);
        return CSTAcadena;
    }

