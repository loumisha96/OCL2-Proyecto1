let ast;
i = 0;

function AnalizarXpath() {
    var ta = document.getElementById(get_vent());
    var contenido = ta.value;

    let p = new producion();

    // if (err) throw err;
    ast = gramaticaXPath.parse(contenido);
    // RecorrerAst2(ast.tree)
    //console.log(ast.reporte)
    //console.log(ast.tree.children[0]);
    // i=0;
}

function query() {
    busqueda.recorrerAst(ast.tree);
}

function ASTXPATH() {
    graficar();
    i = 0;

}

// Descendente

function analaizarXPathDescendente() {
    var ta = document.getElementById(get_vent());
    var contenido = ta.value;
    tree = gramaticaXPathDescendente.parse(contenido);
    console.log(tree);
}

function analaizarXMLDescendente() {
    var ta = document.getElementById(get_vent());
    var contenido = ta.value;
    tree = gramaticaXMLDescendente.parse(contenido);
    console.log(tree);
}