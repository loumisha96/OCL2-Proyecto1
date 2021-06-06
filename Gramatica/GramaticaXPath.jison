/*definición léxica*/
%{
     /*   const rep_gram = require("./AST_XPATH/reporteGramatica").reporteGramatica;
        const pro = require("./AST_XPATH/produccion").producion;
        let p = new pro();*/
%}

%lex
%options case-insensitive

%%
"*"         return 'asterisk';
".."        return 'twoPoint';
"."         return 'point';
"("         return 'parIzq';
")"         return 'parDer';
"{"         return 'llaIzq';
"}"         return 'llaDer';
"::"        return 'doubleColon';
":"         return 'colon';
"|"         return 'barra';
"["         return 'corcheteIzq';
"]"         return 'corcheteDer';
";"         return 'ptcoma';
"+"         return 'add';
","         return 'comma';
"-"         return 'minus';
"=>"        return 'arrow';
"="         return 'equal';
"/""/"      return 'doubleSlash';
"/"         return 'slash';

"!="        return 'diferent';
"<"         return 'menor';
"<="        return 'menorIgual';
">"         return 'mayor';
">="        return 'mayorIgual';
"@"         return 'at';
"or"        return 'or';
"let"       return 'let';
"and"       return 'and';
"div"       return 'div';
"mod"       return 'mod';
"text"      return 'text';
"node"      return 'node';
"child"     return 'child';
"self"      return 'self';
"parent"    return 'parent';
"comment"   return 'comment';
"element"   return 'element';
"ancestor"  return 'ancestor';
"namespace" return 'namespace';
"attribute" return 'attribute';
"preceding" return 'preceding';
"following" return 'following';
"ancestor_or_self"   return 'ancestor_or_self';
"descendant_or_self" return 'descendant_or_self';
"following_sibling"  return 'following_sibling';
"preceding_sibling"  return 'preceding_sibling';
"processing_instruction" return 'processing_instruction';
/*Espacios en blanco*/
[ \r\t]+     {}       
\n           {}    
[0-9]+                      return  'digits';
("."{digits})|({digits}"."[0-9]*)  return  'decimal';
(\"({EscapeQuot}|[^"])*\")|("'""({EscapeApos}|[^'])*""'") return 'cadena';
[A-Za-z_][A-Za-z_0-9]*	    return 'id';


<<EOF>>                 return 'EOF';
.       {
        console.error('Error');
}
/lex

/* Asociación de operadores y precedencia */
%right 'equal'
%left 'or', 'barra'
%left 'and'
%left 'mayor', 'menor', 'mayorIgual', 'menorIgual', 'diferent'



%left 'add', 'minus' /*binary*/
%left 'asterisk', 'slash', 'mod'


%left 'doubleSlash'
%left 'parIzq', 'parDer', 'corcheteIzq', 'corcheteDer'



<
%start ini 
%% /*definicion de gramática*/
ini
        :XPATH EOF {/*console.log(p.getGramatica('ini'));*/}
;
XPATH
        //:STEP
        :XPATH barra TIPO_STEP {}
        |TIPO_STEP{}
;
TIPO_STEP
        :TIPO_STEP OPT PATH{}
        |OPT PATH{}
;

OPT
        :slash{}
        |PATH{}
        
;
PATH
        //:id 
        :doubleSlash{}
        
        |OPTIONS{}
        
        |WILDCARD{}
        |AXIS{}
        |twoPoint{}
        |point{}
;
OPTIONS
        :id LIST_PREDICATE{}
        |id{}
;
AXIS
        :AXIS_NAME doubleColon{}
        |AXIS_NAME{}
;
AXIS_NAME
        :ancestor{}
        |ancestor_or_self{}
        |attribute{}
        |child{}
        |descendant{}
        |descendant_or_self{}
        |following{}
        |following_sibling{}
        |namespace{}
        |parent{}
        |preceding{}
        |preceding_sibling{}
        |self{}
;
LIST_PREDICATE
        :LIST_PREDICATE PREDICATE
        |PREDICATE
;
PREDICATE
        :corcheteIzq E corcheteDer{}
;
E
        :E add E {}
        |E minus E{}
        |E asterisk E{}
        |E slash E{}
        |E equal E{}
        |E diferent E{}
        |E menor E{}
        |E menorIgual E{}
        |E mayor E{}
        |E mayorIgual E{}
        |E or E{}
        |E barra E{}
        |E and E{}
        |E mod E{}
        |id parIzq parDer{}
       // |id{}
        |PATH{}
        |digits{}
        |decimal{}
        |cadena{}
        
        
;

WILDCARD
        :asterisk{}
        |at asterisk{}
        |at id{}
        |node parIzq parDer{}
        |text parIzq parDer{}
;