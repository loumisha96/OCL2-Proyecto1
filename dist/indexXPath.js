let ast;
function AnalizarXpath() {
    var ta = document.getElementById(get_vent());
    var contenido = ta.value;
    
    let p = new producion();
        
       // if (err) throw err;
        ast =gramaticaXPath.parse(contenido);
     //  RecorrerAst2(ast.tree)
    //console.log(ast.reporte)
    //console.log(ast.tree.children[0]);
   // i=0;
}
function RecorrerAst2(padre){
    if (padre.name!=null){
        console.log("id:", i, "label", padre.name)
        i++;
       for (const n in padre.children[0].children){
           RecorrerChildren2(padre.children[0].children[n])
           i++;
       }
            
    }
    
}
i=0;
function RecorrerChildren2(actual){
    
    
    if(actual.children !=undefined){//tiene hijos
        console.log("id:", i, "label", actual.name)
        i++;
        
        for(const child in actual.children){
            if (actual.children[child].children != undefined)
                 console.log("id:", i, "label",actual.children[child].name)
            else
                console.log("id:", i, "label",actual.children[child])
            
            RecorrerChildren2(actual.children[child])
        }

    }
}
function ASTXPATH(){
    
    
    graficar();

}