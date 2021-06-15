let ast;
<<<<<<< HEAD
i = 0;

=======
i=0;
let  search;
>>>>>>> c1b8f0839809259065b7ffe96d79f25d3c5844f9
function AnalizarXpath() {
    var ta = document.getElementById(get_vent());
    var contenido = ta.value;
    
    let p = new producion();
        
       // if (err) throw err;
        ast =gramaticaXPath.parse(contenido);
      // RecorrerAst2(ast.tree)
    console.log(ast.tree)
    //console.log(ast.tree.children[0]);
   // i=0;
}
<<<<<<< HEAD

function query() {
    busqueda.recorrerAst(ast.tree);
=======
function query(){
    search.RecorrerAst(ast.tree);
>>>>>>> c1b8f0839809259065b7ffe96d79f25d3c5844f9
}
function ASTXPATH(){
    graficar();
    i=0;

}