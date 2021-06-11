var nodos = new vis.DataSet();
var aristas = new vis.DataSet();
var bandera = false;
    function graficar(){
        
        padre_id=i;
        padre = ast.tree
        if (padre.name!=null){
            //console.log("id:", i, "label", padre.name)
            nodos.add([
                 {id:i, label:padre.name}
                 // {id:1, label:ast.name}
                
               // adeb
                 
             ]);
             
             i++;
             
            for (const n in padre.children[0].children){
                aristas.add([
                    {from:padre_id, to:i}
                    
                ]);
                console.log("padre", padre_id, "hijo", i)
               bandera=false;
                RecorrerChildren(padre.children[0].children[n],padre_id)
                i++;
            }
                 
         }
        /* var aristas= new vis.DataSet([
            {from:1, to:2},
            {from:2, to:3},
            {from:3, to:1}
        ]);*/
        var contenedor= document.getElementById("grafo");
        var datos = {
            nodes: nodos,
            edges: aristas
        };
        var opciones = {

            layout:{
                hierarchical:{
                    levelSeparation:100,
                    nodeSpacing:100,
                    parentCentralization:true,
                   // shakeTowards:'roots'
                }
            }
        };
        var graf = new vis.Network(contenedor, datos,opciones);
        
    }

    function RecorrerChildren(actual,padre_id){
        
    
        if(actual.children !=undefined){//tiene hijos
            padre_id = i;
            
            aristas.add([
            {from:padre_id, to:i+1}
            
             ]);
             console.log("padre", padre_id, "hijo", i+1)
            i++;
           
           if (bandera==false){
                nodos.add([
                    {id:i-1, label:actual.name}
                ]) ;
                bandera=true;
                console.log("id:", i-1, "label",actual.name)
           }
           
            for(const child in actual.children){
                if (actual.children[child].children != undefined){
                    aristas.add([
                        {from:padre_id, to:i}
                        
                    ]);
                    console.log("padre", padre_id, "hijo", i)
                   nodos.add([
                        {id:i, label:actual.children[child].name}
                    ]) ;
                    console.log("id:", i, "label",actual.children[child].name)
                }
                     
                else{
                    
                    nodos.add([
                        {id:i, label:actual.children[child]}
                    ]) ;
                    console.log("id:", i, "label",actual.children[child])
                }
                 padre_id=i;
              
                RecorrerChildren(actual.children[child],padre_id)
                
            }
    
        }
    }





