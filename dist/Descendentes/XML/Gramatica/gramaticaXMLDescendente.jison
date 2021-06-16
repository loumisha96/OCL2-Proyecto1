/* Definición Léxica */
%lex

%options case-insensitive

escapechar                          [\'\"\\bfnrtv]
escape                              \\{escapechar}
acceptedcharsdouble                 [^\"\\]+
stringdouble                        {escape}|{acceptedcharsdouble}
stringliteral                       \"{stringdouble}*\"


acceptedcharssingle                 [^\'\\]
stringsingle                        {escape}|{acceptedcharssingle}
charliteral                         \'{stringsingle}\'

BSL                                 "\\".
%s                                  comment
%%
"<?"                                this.begin('comment');
<comment>"?>"                       this.popState();
"//".*                              /* skip comments */
"/*"                                this.begin('comment');
<comment>"*/"                       this.popState();
<comment>.                          /* skip comment content*/
\s+                                 /* skip whitespace */

"print"                     return 'print';
"null"                      return 'null';
// "true"                      return 'true';
// "false"                     return 'false';

"+"                         return 'plus';
"-"                         return 'minus';
"*"                         return 'times';
"/"                         return 'div';
"%"                         return 'mod';



"<="                        return 'lte';
">="                        return 'gte';
"<"                         return 'lt';
">"                         return 'gt';
"="                         return 'asig';
"=="                        return 'equal';
"!="                        return 'nequal';

"&&"                        return 'and';
"||"                        return 'or';
"!"                         return 'not';


";"                         return 'semicolon';
"("                         return 'lparen';
")"                         return 'rparen';

"&&"                        return 'and';
"||"                        return 'or';
"!"                         return 'not';

/* Number literals */

//(([0-9]+"."[0-9]*)|("."[0-9]+))     return 'DoubleLiteral';
//[0-9]+                              return 'IntegerLiteral';

[a-zA-Z_][a-zA-Z0-9_ñÑ]*            return 'identifier';

{stringliteral}                     return 'StringLiteral'
{charliteral}                       return 'CharLiteral'
[^<>]*[a-zA-Z0-9_ñÑ]+[^<>]*           return 'todos';

//error lexico
.                                   {
                                        console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
                                    }

<<EOF>>                     return 'EOF'

/lex

//SECCION DE IMPORTS
%{

%}

// DEFINIMOS PRESEDENCIA DE OPERADORES
%left 'or'
%left 'and'
%left 'lt' 'lte' 'gt' 'gte' 'equal' 'nequal'
%left 'plus' 'minus'
%left 'times' 'div' 'mod'
%left 'pow'
%left 'not'
%left UMINUS

%left 'lparen' 'rparen'


// DEFINIMOS PRODUCCIÓN INICIAL
%start START

%%


/* Definición de la gramática */
START : RAICES EOF  {
    $$ = new NodeDescXML("START");
    $$.childList.push($1);
    return $$;
 }
;

RAICES: RAIZ RAICESP {
    $$ = new NodeDescXML("RAICES");
    $$.childList.push($1);
    $$.childList.push($2);
}
;

RAICESP: RAIZ RAICESP {
    $$ = new NodeDescXML("RAICESP");
    $$.childList.push($1);
    $$.childList.push($2);
}
    | {}
;


RAIZ:
    PRINT semicolon       {
        $$ = new NodeDescXML("RAIZ");
        $$.childList.push($1);
        $$.childList.push($2);

     }
    | OBJETO              {
        $$ = new NodeDescXML("RAIZ");
        $$.childList.push($1);
    }
;

OBJETO:
    lt identifier LATRIBUTOS OBJETOP {
        $$ = new NodeDescXML("OBJETOP");
        $$.childList.push($1);
        $$.childList.push($2);
        $$.childList.push($3);
        $$.childList.push($4);
    }
;

OBJETOP:
    gt OBJETOS lt div identifier gt
    {
        $$ = new NodeDescXML("OBJETOP");
        $$.childList.push($1);
        $$.childList.push($2);
        $$.childList.push($3);
        $$.childList.push($4);
        $$.childList.push($5);
        $$.childList.push($6);
    }
    | gt LISTA_ID_OBJETO lt div identifier gt
    {
        $$ = new NodeDescXML("OBJETOP");
        $$.childList.push($1);
        $$.childList.push($2);
        $$.childList.push($3);
        $$.childList.push($4);
        $$.childList.push($5);
        $$.childList.push($6);
    }
    | div gt {
        $$ = new NodeDescXML("OBJETOP");
        $$.childList.push($1);
        $$.childList.push($2);
    }
    | gt  lt div identifier gt {
        $$ = new NodeDescXML("OBJETOP");
        $$.childList.push($1);
        $$.childList.push($2);
        $$.childList.push($3);
        $$.childList.push($4);
        $$.childList.push($5);
    }
;


LATRIBUTOS: ATRIBUTOS {
    $$ = new NodeDescXML("LATRIBUTOS");
    $$.childList.push($1);
 }
 |
;


ATRIBUTOS:
    ATRIBUTO ATRIBUTOSP {
        $$ = new NodeDescXML("ATRIBUTOS");
        $$.childList.push($1);
        $$.childList.push($2);
    };

ATRIBUTOSP:
    ATRIBUTO ATRIBUTOSP {
        $$ = new NodeDescXML("ATRIBUTOSP");
        $$.childList.push($1);
        $$.childList.push($2);
    }
    | {}
;

ATRIBUTO:
    identifier asig StringLiteral {
        $$ = new NodeDescXML("ATRIBUTO");
        $$.childList.push($1);
        $$.childList.push($2);
        $$.childList.push($3);
    }
;

LISTA_ID_OBJETO: identifier LISTA_ID_OBJETOP{
                    $$ = new NodeDescXML("LISTA_ID_OBJETO");
                    $$.childList.push($1);
                    $$.childList.push($2);
                }
                | todos LISTA_ID_OBJETOP{
                    $$ = new NodeDescXML("LISTA_ID_OBJETO");
                    $$.childList.push($1);
                    $$.childList.push($2);
                }
;

LISTA_ID_OBJETOP:
        identifier LISTA_ID_OBJETOP {
                $$ = new NodeDescXML("LISTA_ID_OBJETOP");
                $$.childList.push($1);
                $$.childList.push($2);
        }
        | todos LISTA_ID_OBJETOP {
            $$ = new NodeDescXML("LISTA_ID_OBJETOP");
            $$.childList.push($1);
            $$.childList.push($2);
        }
        | {}
;

OBJETOS:
    OBJETO OBJETOSP {
        $$ = new NodeDescXML("OBJETOS");
        $$.childList.push($1);
        $$.childList.push($2);
    };

OBJETOSP:
    OBJETO OBJETOSP {
        $$ = new NodeDescXML("OBJETOSP");
        $$.childList.push($1);
        $$.childList.push($2);
    }
    | {};

PRINT:
    print lparen EXPR rparen            {
        $$ = new NodeDescXML("PRINT");
        $$.childList.push($1);
        $$.childList.push($2);
        $$.childList.push($3);
        $$.childList.push($4);
     } ;
