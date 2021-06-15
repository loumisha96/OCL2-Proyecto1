#!/bin/bash

echo "Procesando gramática..."

# jison ./Descendentes/XPath/Gramatica/gramatica.jison
jison ./dist/Descendentes/XPath/Gramatica/gramaticaXPathDescendente.jison

echo "Gramática procesasda..."
