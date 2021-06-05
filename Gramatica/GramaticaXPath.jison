/*definición léxica*/
%{

%}

%lex
%options case-insensitive

%%
"*"         return 'asterisk';
"("         return 'parIzq';
")"         return 'parDer';
"{"         return 'llaIzq';
"}"         return 'llaDer';
"::"        return 'doubleColon';
":"         return 'colon';
"|"         return 'barra';
"["         return 'corcheteIzq';
"]"         return 'corcheteDer';

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
[0-9]+                      return  'digits';
("."{digits})|({digits}"."[0-9]*)  return  'decimal';
(\"({EscapeQuot}|[^"])*\")|("'""({EscapeApos}|[^'])*""'") return 'STRING_LITERAL';
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
        :XPATH EOF {}
;
XPATH
        //:STEP
        :XPATH barra TIPO_PATH{}
        |TIPO_PATH{}
;
TIPO_PATH
        :slash STEP{}
        |STEP{}
        |lIST_PATH
;
STEP
        :STEP AXIS{}
        |AXIS{}
;
AXIS
        :AXIS_NAME doubleColon AXIS_OPTION{}
        |AXIS_NAME doubleColon asterisk slash AXIS_OPTION{}
        
;
AXIS_OPTION
        :PATH{}
        |id{}
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
lIST_PATH
        :lIST_PATH PATH{}
        |PATH{}
;
PATH
        //:id 
        :slash OPTIONS{}
        |doubleSlash OPTIONS{}
        
        |doubleSlash asterisk{}
        |asterisk slash{}
        |WILDCARD{}
        
;
OPTIONS
        :id PREDICATE{}
        |id{}
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
        |id{}
        |PATH{}
        |digits{}
        |decimal{}
        
;

WILDCARD
        :asterisk{}
        |at asterisk{}
        |node corcheteIzq corcheteDer{}
;