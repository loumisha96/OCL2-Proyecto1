function analaizarXPathDescendente() {
    var ta = document.getElementById(get_vent());
    var contenido = ta.value;
    tree = gramaticaXPathDescendente.parse(contenido);

    newTree = new TreeXPathDesc();
    console.log(tree);

    dot = newTree.graphXPathDescendente(tree);
    dot += '}';
    console.log(dot);

    var options = {
        format: 'svg'
            // format: 'png-image-element'

    }

    let image = viz(dot, options);

    // let console = document.getElementById('contenidoconsolas');
    // console.innerHTML = image; // SVG
    // console.appendChild(image);



}

function analaizarXMLDescendente() {
    var ta = document.getElementById(get_vent());
    var contenido = ta.value;
    tree = gramaticaXMLDescendente.parse(contenido);


    console.log(tree);
}