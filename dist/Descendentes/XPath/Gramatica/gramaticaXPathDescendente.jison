/*definición léxica*/
%{

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


%right 'equal'
%left 'or', 'barra'
%left 'and'
%left 'mayor', 'menor', 'mayorIgual', 'menorIgual', 'diferent'



%left 'add', 'minus'
%left 'asterisk', 'slash', 'mod'


%left 'doubleSlash'
%left 'parIzq', 'parDer', 'corcheteIzq', 'corcheteDer'



%start ini
%%

ini
        :XPATH EOF {
            $$ = new NodeDesc('INI');
            $$.childList.push($1);
            return $$;
        }
;
XPATH:
        ENTRY LIST_STEP{
            $$ = new NodeDesc('XPATH');
            $$.childList.push($1);
            $$.childList.push($2);

        }
    |   LIST_STEP {
        $$ = new NodeDesc('XPATH');
        $$.childList.push($1);
    }
;
ENTRY
        :slash{
            $$ = new NodeDesc('ENTRY');
            $$.childList.push($1);
        }
        |doubleSlash{
            $$ = new NodeDesc('ENTRY');
            $$.childList.push($1);
        }
;

LIST_STEP: STEP LIST_STEPP {
    $$ = new NodeDesc('LIST_STEP');
    $$.childList.push($1);
    $$.childList.push($2);
}
;

LIST_STEPP:
    SEPARATE STEP LIST_STEPP {
        $$ = new NodeDesc('LIST_STEP');
        $$.childList.push($1);
        $$.childList.push($2);
        $$.childList.push($3);
    }
    | {  }
;

SEPARATE
        :barra ENTRY {
            $$ = new NodeDesc("SEPARATE");
            $$.childList.push($1);
            $$.childList.push($2);
        }
        |barra {
            $$ = new NodeDesc("SEPARATE");
            $$.childList.push($1);
        }
        |slash {
            $$ = new NodeDesc("SEPARATE");
            $$.childList.push($1);
        }
        |doubleSlash {
            $$ = new NodeDesc("SEPARATE");
            $$.childList.push($1);
        }
;

STEP
        :id LIST_PREDICATE {
            $$ = new NodeDesc("STEP");
            $$.childList.push($1);
            $$.childList.push($2);
        }
        |id {
            $$ = new NodeDesc("STEP");
            $$.childList.push($1);
        }
        |AXIS {
            $$ = new NodeDesc("STEP");
            $$.childList.push($1);
        }
        |WILDCARD {
            $$ = new NodeDesc("STEP");
            $$.childList.push($1);
        }

;


LIST_PREDICATE: PREDICATE LIST_PREDICATEP { 
    $$ = new NodeDesc("LIST_PREDICATE");
    $$.childList.push($2);
    $$.childList.push($1);
};

LIST_PREDICATEP:
    PREDICATE LIST_PREDICATEP {
        $$ = new NodeDesc('LIST_PREDICATEP');
        $$.childList.push($1);
        $$.childList.push($2);


    }
    | {  }
;


PREDICATE:
    corcheteIzq LIST_E corcheteDer {
        $$ = new NodeDesc("PREDICATE");
        $$.childList.push($1);
        $$.childList.push($2);
    }
;



LIST_E:
    E LIST_EP {
        $$ = new NodeDesc("LIST_E");
        $$.childList.push($1);
        $$.childList.push($2);
    };

LIST_EP: OP E LIST_EP {
        $$ = new NodeDesc("LIST_EP");
        $$.childList.push($1);
        $$.childList.push($2);
        $$.childList.push($3);
}
        | { }
;

OP
        :add {
            $$ = new NodeDesc("OP");
            $$.childList.push($1);
        }
        |minus {
            $$ = new NodeDesc("OP");
            $$.childList.push($1);
        }
        |asterisk{
            $$ = new NodeDesc("OP");
            $$.childList.push($1);
        }
        |slash{
            $$ = new NodeDesc("OP");
            $$.childList.push($1);
        }
        |equal{
            $$ = new NodeDesc("OP");
            $$.childList.push($1);
        }
        |diferent{
            $$ = new NodeDesc("OP");
            $$.childList.push($1);
        }
        |menor{
            $$ = new NodeDesc("OP");
            $$.childList.push($1);
        }
        |menorIgual{
            $$ = new NodeDesc("OP");
            $$.childList.push($1);
        }
        |mayorIgual{
            $$ = new NodeDesc("OP");
            $$.childList.push($1);
        }
        |mayor{
            $$ = new NodeDesc("OP");
            $$.childList.push($1);
        }
        |or{
            $$ = new NodeDesc("OP");
            $$.childList.push($1);
        }
        |barra{
            $$ = new NodeDesc("OP");
            $$.childList.push($1);
        }
        |and{
            $$ = new NodeDesc("OP");
            $$.childList.push($1);
        }
        |mod{
            $$ = new NodeDesc("OP");
            $$.childList.push($1);
        }

;

E:
    STEP{
        $$ = new NodeDesc("E");
        $$.childList.push($1);
    }
    |ENTRY{
        $$ = new NodeDesc("E");
        $$.childList.push($1);
    }
    |decimal{
        $$ = new NodeDesc("E");
        $$.childList.push($1);
    }
    |digits{
        $$ = new NodeDesc("E");
        $$.childList.push($1);
    }
    |cadena{
        $$ = new NodeDesc("E");
        $$.childList.push($1);
    }

;
AXIS
        :AXIS_NAME doubleColon STEP {
            $$ = new NodeDesc("AXIS");
            $$.childList.push($1);
            $$.childList.push($2);
            $$.childList.push($3);
        }
        |AXIS_NAME{
            $$ = new NodeDesc("AXIS");
            $$.childList.push($1);
        }
;
AXIS_NAME
        :ancestor{
            $$ = new NodeDesc("AXIS_NAME");
            $$.childList.push($1);
        }
        |ancestor_or_self{
            $$ = new NodeDesc("AXIS_NAME");
            $$.childList.push($1);
        }
        |attribute{
            $$ = new NodeDesc("AXIS_NAME");
            $$.childList.push($1);
        }
        |child{
            $$ = new NodeDesc("AXIS_NAME");
            $$.childList.push($1);
        }
        |descendant{
            $$ = new NodeDesc("AXIS_NAME");
            $$.childList.push($1);
        }
        |descendant_or_self{
            $$ = new NodeDesc("AXIS_NAME");
            $$.childList.push($1);
        }
        |following{
            $$ = new NodeDesc("AXIS_NAME");
            $$.childList.push($1);
        }
        |following_sibling{
            $$ = new NodeDesc("AXIS_NAME");
            $$.childList.push($1);
        }
        |namespace{
            $$ = new NodeDesc("AXIS_NAME");
            $$.childList.push($1);
        }
        |parent{
            $$ = new NodeDesc("AXIS_NAME");
            $$.childList.push($1);
        }
        |preceding{
            $$ = new NodeDesc("AXIS_NAME");
            $$.childList.push($1);
        }
        |preceding_sibling{
            $$ = new NodeDesc("AXIS_NAME");
            $$.childList.push($1);
        }
        |self{
            $$ = new NodeDesc("AXIS_NAME");
            $$.childList.push($1);
        }
;
WILDCARD
        :asterisk{
            $$ = new NodeDesc("WILDCARD");
            $$.childList.push($1);
        }
        |twoPoint{
            $$ = new NodeDesc("WILDCARD");
            $$.childList.push($1);
        }
        |point{
            $$ = new NodeDesc("WILDCARD");
            $$.childList.push($1);
        }
        |at asterisk{
            $$ = new NodeDesc("WILDCARD");
            $$.childList.push($1);
            $$.childList.push($2);
        }
        |at id PREDICATE{
            $$ = new NodeDesc("WILDCARD");
            $$.childList.push($1);
            $$.childList.push($2);
            $$.childList.push($3);
        }
        |at id{
            $$ = new NodeDesc("WILDCARD");
            $$.childList.push($1);
            $$.childList.push($2);
        }
        |node parIzq parDer{
            $$ = new NodeDesc("WILDCARD");
            $$.childList.push($1);
            $$.childList.push($2);
            $$.childList.push($3);
        }
        |text parIzq parDer{
            $$ = new NodeDesc("WILDCARD");
            $$.childList.push($1);
            $$.childList.push($2);
            $$.childList.push($3);
        }
        |last parIzq parDer{
            $$ = new NodeDesc("WILDCARD");
            $$.childList.push($1);
            $$.childList.push($2);
            $$.childList.push($3);
        }
;
