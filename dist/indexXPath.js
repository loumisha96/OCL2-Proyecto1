let ast;
i=0;
let search;
function AnalizarXpath() {
    
    var ta = document.getElementById(get_vent());
    var contenido = ta.value;
    contenidoErrores="";
            Errores.clear();
        try{
            let p = new producion();
            ast =gramaticaXPath.parse(contenido);
            if(!Errores.Vacio())
                console.log("no se encontraron errores")
            else
                contenido.Errores = Errores.mostrar_Lista()
        }
        catch(error){
            console.log(error)
        }
      // RecorrerAst2(ast.tree)
    //console.log(ast.reporte)
    //console.log(ast.tree.children[0]);
   // i=0;
}
function query(){
    search.RecorrerAst(ast.tree);
}
function ASTXPATH(){
    graficar();
    i=0;

}