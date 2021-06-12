"use strict";
var CSTAcadena = "digraph G {node[shape= \"box\", style=filled ]";
var m = 0;
var k = 0;
var padreXML;
var cstXML;


function otra(result) {
    result.forEach(function (element) {
        cstXML += "digraph G{ node[shape= \"box\", style=filled ];\n\n";
        cstXML += "RAIZ;\n";
        cstXML += 'RAIZ->';
        cstXML += recorrer(element);
        cstXML += '}';

    });
    cstXML = cstXML.replace('undefined', '');
    return cstXML;
}
function recorrer(objetos) {
    var concatena = "";
    m++;
    concatena+="nodo"+m+"[label = \" OBJETOS \"];";
    m++;
    var padre = "nodo" + m;
    //Se agrega el entorno anterior al padre
    concatena += padre + ";\n";
    concatena += padre + "[label = \"" + objetos.id + "\"];\n";
    if (objetos.tablaSimbolos != undefined) {
        if (objetos.tablaSimbolos.length != 0) {
            objetos.tablaSimbolos.forEach(function (atributos) {
                k++;
                var atributo = "nodoAtributo" + k;
                var val = "";
                //Acciones para graficara tributos a objeto
                concatena += padre + "->" + atributo + ";\n";
                val = atributos.valor.replace('"', '');
                val = val.replace('"', '');
                concatena += atributo + "[label =\"" + atributos.id + "=" + val + "\"];\n";
            });
        }
    }
    //si no tiene mas hijos
    if (objetos.texto != '') {
        m++;
        var nodoTexto = "nodoTexto" + m;
        concatena += padre + "->" + nodoTexto + ";\n";
        concatena += nodoTexto + "[label =\"" + objetos.texto + "\"];\n";
    }
    if (objetos.tablaEntornos != undefined) {
        if (objetos.tablaEntornos.length != 0) {
            //m++;
           //<\"];"
            objetos.tablaEntornos.forEach(function (objetoSiguiente) {
                //Con esta linea agregamos el objeto anterior al padre
                concatena += padre + "->";
                concatena += recorrer(objetoSiguiente);
            });
        }
    }
    return concatena;
}
function pruebaGraficarXML(result){

    var contenedorXML= document.getElementById("grafoXML");//llama al contenedor

    var datosXML=otra(result)
    var parsedData = vis.network.convertDot(datosXML);
    var datosML = {
        nodes: parsedData.nodes,
        edges: parsedData.edges
    };
    var opcionesXML = {//estética del grafo
        layout:{
            hierarchical:{
                levelSeparation:100,
                nodeSpacing:100,
                parentCentralization:true,
                
            }
        }
    };
    var graf = new vis.Network(contenedorXML, datosML,opcionesXML);//muestra grafo
}


//# sourceMappingURL=prueba.js.map