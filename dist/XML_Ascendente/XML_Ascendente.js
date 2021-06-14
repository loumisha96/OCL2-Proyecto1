"use strict";
var cont = 0;
var tablaGeneral = [];
var entornoAnterior = "Global";
var simboloAnterior;
var entornoGlobal;
var guardarTabla;
function recorreTabla(objeto, tabla) {
    if (tabla != undefined) {
        tabla.forEach(function (element) {
            if (element.id == objeto) {
                if (element.id == element.EtiquetaCierre) {
                    if (element.tablaSimbolos.length != 0) {
                    }
                    else {
                        if (element.texto != "") {
                            console.log("<" + element.id + ">" + element.texto + "</" + element.EtiquetaCierre + ">");
                        }
                    }
                }
                else {
                }
                llenarElementos(element.tablaEntornos);
                // console.log(element.tablaEntornos)
            }
            else {
                recorreTabla(objeto, element.tablaEntornos);
            }
        });
    }
}
function llenarElementos(tabla) {
    if (tabla != undefined) {
        tabla.forEach(function (element) {
            if (element.id == element.EtiquetaCierre) {
                if (element.tablaSimbolos.length != 0) {
                }
                else {
                    if (element.texto != "") {
                        console.log("<" + element.id + ">" + element.texto + "</" + element.EtiquetaCierre + ">");
                    }
                }
            }
            else {
            }
        });
    }
}
function agregarTablaSimbolos3(result) {
    entornoGlobal = new Entorno(null);
    result.forEach(function (element) {
        if (element.id == element.EtiquetaCierre || element.EtiquetaCierre == 'Unica') {
            var entornoObjeto_1 = new Entorno(null);
            if (element.listaAtributos.lenght != 0) {
                element.listaAtributos.forEach(function (atributo) {
                    if (atributo != undefined) {
                        var simbolo = new SimboloXML("ATRIBUTO", atributo.id, atributo.linea, atributo.columna, atributo.valor, entornoAnterior);
                        entornoObjeto_1.agregar(simbolo.id, simbolo);
                    }
                });
            }
            element.entorno = entornoObjeto_1;
            if (element.listaObjetos.lenght != 0) {
                entornoAnterior = element.id;
                element.listaObjetos.forEach(function (objeto) {
                    if (objeto != undefined) {
                        var simbolo = new SimboloXML("OBJETO", objeto.id, objeto.linea, objeto.columna, objeto.texto, entornoAnterior);
                        entornoObjeto_1.agregar(simbolo.id, simbolo);
                        agregarTablaSimbolos3(objeto.listaObjetos);
                    }
                });
            }
            if (element != undefined) {
                var simbolo = new SimboloXML("OBJETO", element.id, element.linea, element.columna, element.texto, "Global");
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
    for (var index = 0; index < element.length; index++) {
        if (element[0].tablaEntornos.length == 0) {
            var simbolo = new SimboloXML("OBJETO", element[index].id, element[index].linea, element[index].columna, element[index].texto, entornoAnterior);
            llenar(simbolo);
        }
    }
    for (var index = 0; index < element.length; index++) {
        if (element[index].tablaEntornos.length != 0) {
            var simbolo = new SimboloXML("OBJETO", element[index].id, element[index].linea, element[index].columna, element[index].texto, entornoAnterior);
            llenar(simbolo);
        }
        if (element[index].tablaSimbolos != undefined) {
            element[index].tablaSimbolos.forEach(function (atributo) {
                var simbolo = new SimboloXML("ATRIBUTO", atributo.id, atributo.linea, atributo.columna, atributo.valor, entornoAnterior);
                llenar(simbolo);
            });
        }
    }
    for (var index = 0; index < element.length; index++) {
        if (element[index].tablaEntornos.length != 0) {
            simboloAnterior = new SimboloXML("OBJETO", element[index].id, element[index].linea, element[index].columna, element[index].texto, entornoAnterior);
            entornoAnterior = element[index].id;
            agregarTablaSimbolos(element[index].tablaEntornos);
        }
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
//# sourceMappingURL=XML_Ascendente.js.map