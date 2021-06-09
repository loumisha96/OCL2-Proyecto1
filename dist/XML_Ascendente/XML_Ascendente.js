"use strict";
var cont = 0;
var tablaGeneral = [];
var entornoAnterior = "Global";
var simboloAnterior;
let entornoGlobal;
function agregarTablaSimbolos3(result) {
    entornoGlobal = new Entorno(null);
    result.forEach((element) => {
        if (element.id == element.EtiquetaCierre || element.EtiquetaCierre == 'Unica') {
            let entornoObjeto = new Entorno(null);
            if (element.listaAtributos.lenght != 0) {
                element.listaAtributos.forEach((atributo) => {
                    if (atributo != undefined) {
                        let simbolo = new SimboloXML("ATRIBUTO", atributo.id, atributo.linea, atributo.columna, atributo.valor, entornoAnterior);
                        entornoObjeto.agregar(simbolo.id, simbolo);
                    }
                });
            }
            element.entorno = entornoObjeto;
            if (element.listaObjetos.lenght != 0) {
                entornoAnterior = element.id;
                element.listaObjetos.forEach((objeto) => {
                    if (objeto != undefined) {
                        let simbolo = new SimboloXML("OBJETO", objeto.id, objeto.linea, objeto.columna, objeto.texto, entornoAnterior);
                        entornoObjeto.agregar(simbolo.id, simbolo);
                        agregarTablaSimbolos3(objeto.listaObjetos);
                    }
                });
            }
            if (element != undefined) {
                let simbolo = new SimboloXML("OBJETO", element.id, element.linea, element.columna, element.texto, "Global");
                entornoGlobal.agregar(simbolo, element, simbolo);
            }
            // agregarTablaSimbolos3(element.listaObjetos)
        }
        else {
            console.log("error semantico" + element.id);
        }
    });
}
function agregarTablaSimbolos(element) {
    for (let index = 0; index < element.length; index++) {
        if (element[0].tablaEntornos.length == 0) {
            let simbolo = new SimboloXML("OBJETO", element[index].id, element[index].linea, element[index].columna, element[index].texto, entornoAnterior);
            llenar(simbolo);
        }
    }
    for (let index = 0; index < element.length; index++) {
        if (element[index].tablaEntornos.length != 0) {
            let simbolo = new SimboloXML("OBJETO", element[index].id, element[index].linea, element[index].columna, element[index].texto, entornoAnterior);
            llenar(simbolo);
        }
        if (element[index].tablaSimbolos != undefined) {
            element[index].tablaSimbolos.forEach((atributo) => {
                let simbolo = new SimboloXML("ATRIBUTO", atributo.id, atributo.linea, atributo.columna, atributo.valor, entornoAnterior);
                llenar(simbolo);
            });
        }
    }
    for (let index = 0; index < element.length; index++) {
        if (element[index].tablaEntornos.length != 0) {
            simboloAnterior = new SimboloXML("OBJETO", element[index].id, element[index].linea, element[index].columna, element[index].texto, entornoAnterior);
            entornoAnterior = element[index].id;
            agregarTablaSimbolos(element[index].tablaEntornos);
        }
    }
}
function recorreTabla() {
    for (let index = 1; index < tablaGeneral.length; index++) {
        console.log(tablaGeneral[index]);
    }
}
var tabla = "";
function llenar(TablaSimbolos) {
    tabla += "<tr> \n";
    tabla += "<th scope=\"row\">" + TablaSimbolos.id + "</th> \n";
    tabla += "<td>" + TablaSimbolos.tipo + "</td><td>" +
        TablaSimbolos.valor + "</td><td>" +
        TablaSimbolos.linea + "</td><td>\n" +
        TablaSimbolos.columna + "</td><td>\n" +
        TablaSimbolos.Entorno + "</td>\n";
    tabla += "</tr>\n";
}
