/*definición léxica*/
%{
        const rep_gram = require("./XPATH/reporteGramatica").reporteGramatica;
        const pro = require("./XPATH/produccion").producion;
        const tree = require("./XPATH/ast").tree;
        const nodoX = require("./XPATH/nodo").nodo;
        let p = new pro();
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
"last"      return 'last';
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
[0-9]+("."[0-9]+)?  return  'decimal';
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
        :XPATH EOF {/*console.log(p.getGramatica('ini'));*/ return new tree(); $$.padre =$1;}
;
XPATH
        :ENTRY LIST_STEP{ let xp = new Array(); $$ = new nodoX("XPATH",xp); }
        |LIST_STEP{$$=$1;}
;
ENTRY
        :slash{let entry = new Array(); entry.push(); $$=new nodoX("ENTRY",entry);}
        |doubleSlash{let entry2 = new Array(); entry2.push(); $$=new nodoX("ENTRY",entry2);}
;
LIST_STEP
        :LIST_STEP SEPERATE STEP {$$=$1; $3.path=$2; $$.push($3); }
        |STEP{$$=new nodoX("list_Step", new Array($1)); console.log($$.children[0]);}
;
SEPERATE
        :barra ENTRY{}
        |barra{$$=$1;}
        |slash{$$=$1;}
        |doubleSlash{$$=$1;}
;

STEP
        :id LIST_PREDICATE{}
        |id{ nodito = new nodoX(); nodito.name=$1; $$=nodito;}
        |AXIS{}
        |WILDCARD{ let s4 = new Array();s4.push($1); $$=new nodoX("step",s4);}
        
;
LIST_PREDICATE
        :LIST_PREDICATE PREDICATE
        |PREDICATE
;
PREDICATE
        :corcheteIzq LIST_E corcheteDer{}
;
LIST_E
        :LIST_E OP E{}
        |E{}
;
OP
        :add{}
        |minus{}
        |asterisk
        |slash
        |equal
        |diferent
        |menor
        |menorIgual
        |mayorIgual
        |mayor
        |or
        |barra
        |and
        |mod
        
;
E
        :STEP
        |ENTRY
        |decimal
        |digits
        |cadena
        
;
AXIS
        :AXIS_NAME doubleColon STEP {}
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
WILDCARD
        :asterisk{let w = new Array(); w.push($1); $$ = new nodoX("wildcard",w);}
        |point{let w2= new Array(); w2.push($1); $$= new nodoX("wildcard",w2); }
        |twoPoint{}
        |at asterisk{let w4 = new Array(); w4.push($1); w4.push($2); $$=new nodoX("wildcard",w4); }
        |at id PREDICATE{}
        |at id{}
        |node parIzq parDer{}
        |text parIzq parDer{}
        |last parIzq parDer{}
;
