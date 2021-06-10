/* Definición Léxica */
%lex

%options case-insensitive

escapechar                          [\'\"\\bfnrtv]
escape                              \\{escapechar}
acceptedcharsdouble                 [^\"\\]+
stringdouble                        {escape}|{acceptedcharsdouble}
stringliteral                       \"{stringdouble}*\"

//todo                                [^<>]* 

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
"true"                      return 'true';
"false"                     return 'false';

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

(([0-9]+"."[0-9]*)|("."[0-9]+))     return 'DoubleLiteral';
[0-9]+                              return 'IntegerLiteral';

[a-zA-Z_][a-zA-Z0-9_ñÑ]*            return 'identifier';

{stringliteral}                     return 'StringLiteral'
{charliteral}                       return 'CharLiteral'
[^<>]*[a-zA-Z0-9_ñÑ]+[^<>]*           return 'todos';
       
//error lexico
.                                   {
                                        console.error('Error léxico: ' + yytext + ', linea: ' + yylloc.first_line + ',  columna: ' + yylloc.first_column);
                                         var er =new NodoError("Error Lexico","No se esperaba el caracter: "+ yytext, yylloc.first_line,yylloc.first_column);
                                        Errores.add(er);
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
START : RAICES EOF         { $$ = $1; return $$; }
    ;

RAICES:
    RAICES RAIZ           { $1.push($2); $$ = $1;}
	| RAIZ                { $$ = [$1]; } 
   // | PANIC {}
;
RAIZ:
    PRINT semicolon       { $$ = $1 }
    | OBJETO              { $$ = $1 }
   // | PANIC{}
;

OBJETO:
      lt identifier LATRIBUTOS gt OBJETOS           lt div identifier gt       {contadorLineas++; 
                                                                                    if($2==$8){
                                                                                    $$= new EntornoXML($2,'',@1.first_line, @1.first_column,$3,$5,$8);
                                                                                    }else{
                                                                                    console.log("Error semantico"+ $2)
                                                                                    var er =new NodoError("Error Semantico","Etiquetas no coincidenG: "+ $2+"-> "+$8, contadorLineas,0);
                                                                                    Errores.add(er);
                                                                                    }  
                                                                                        }
    | lt identifier LATRIBUTOS gt LISTA_ID_OBJETO   lt div identifier gt       { contadorLineas++; 
                                                                                    if($2==$8){
                                                                                    $$= new EntornoXML($2,$5,@1.first_line, @1.first_column,$3,[],$8);
                                                                                    }else{
                                                                                    console.log("Error semantico"+ $2)
                                                                                    var er =new NodoError("Error Semantico","Etiquetas no coincidenG: "+ $2+"-> "+$8, contadorLineas,0);
                                                                                    Errores.add(er);
                                                                                    } 
                                                                                     }
    | lt identifier LATRIBUTOS div gt                                          { $$= new EntornoXML($2,'',@1.first_line, @1.first_column,$3,[],'Unica'); }
    | lt identifier LATRIBUTOS gt  lt div identifier gt       { contadorLineas++; 
                                                                if($2==$8){
                                                                $$ = new EntornoXML($2,$5,@1.first_line, @1.first_column,[],[],$7);
                                                                }else{
                                                                console.log("Error semantico"+ $2)
                                                                var er =new NodoError("Error Semantico","Etiquetas no coincidenG: "+ $2+"-> "+$7, contadorLineas,0);
                                                                Errores.add(er);
                                                                                    } 
                                                                                    }

    |error identifier {console.error('Error Sintactico: ' + yytext + ', linea: ' + @1.first_line + ',  columna: ' + @1.first_column);
                               var er =new NodoError("Error Sintatico","No se esperaba el caracter: "+ yytext, @1.first_line,@1.first_column);
                               Errores.add(er);}
;
PANIC: error {console.error('Error Sintactico: ' + yytext + ', linea: ' + @1.first_line + ',  columna: ' + @1.first_column);
                               var er =new NodoError("Error Sintatico","No se esperaba el caracter: "+ yytext, @1.first_line,@1.first_column);
                               Errores.add(er);}

;

LATRIBUTOS: ATRIBUTOS                               { $$ = $1; }
           |                                        { $$ = []; }
;

ATRIBUTOS:
    ATRIBUTOS ATRIBUTO                              { $1.push($2); $$ = $1;}
    | ATRIBUTO                                      { $$ = [$1]; } 
   // |PANIC ATRIBUTOS{}
;

ATRIBUTO: 
    identifier asig StringLiteral                   { $$= new Atributo($1, $3, @1.first_line, @1.first_column); }
    |error StringLiteral {console.error('Error Sintactico: ' + yytext + ', linea: ' + @1.first_line + ',  columna: ' + @1.first_column);
                               var er =new NodoError("Error Sintatico","No se esperaba el caracter: "+ yytext, @1.first_line,@1.first_column);
                               Errores.add(er);}
;

LISTA_ID_OBJETO: LISTA_ID_OBJETO identifier          { $1=$1 + ' ' +$2 ; $$ = $1;}
        | identifier                                 { $$ = $1 }
        |LISTA_ID_OBJETO todos          { $1=$1 + ' ' +$2 ; $$ = $1;}
        | todos                                 { $$ = $1 }
        
        
;

OBJETOS:
      OBJETOS OBJETO        { $1.push($2); $$ = $1;}
	| OBJETO                { $$ = [$1]; } 
    //| PANIC OBJETOS {$$ = [$2];}
   // | OBJETOS PANIC{}
;
PRINT:
    print lparen EXPR rparen            { $$ = new Print($3, @1.first_line, @1.first_column); } 
   // |PANIC{}
    ;

/*EXPR:
    PRIMITIVA                           { $$ = $1 }
    | OP_ARITMETICAS                    { $$ = $1 };


OP_ARITMETICAS:
    EXPR plus EXPR                      { $$ = new Operacion($1,$3,Operador.SUMA, @1.first_line, @1.first_column); }
    | EXPR minus EXPR                   { $$ = new Operacion($1,$3,Operador.RESTA, @1.first_line, @1.first_column); }
    | EXPR times EXPR                   { $$ = new Operacion($1,$3,Operador.MULTIPLICACION, @1.first_line, @1.first_column); }
    | EXPR div EXPR                     { $$ = new Operacion($1,$3,Operador.DIVISION, @1.first_line, @1.first_column); }
    | EXPR mod EXPR                     { $$ = new Operacion($1,$3,Operador.MODULO, @1.first_line, @1.first_column); }
    | minus EXPR %prec UMINUS           { $$ = new Operacion($2,$2,Operador.MENOS_UNARIO, @1.first_line, @1.first_column); }
    | lparen EXPR rparen                { $$ = $2 }
;

PRIMITIVA:
    IntegerLiteral                      { $$ = new Primitivo(Number($1), @1.first_line, @1.first_column); }
    | DoubleLiteral                     { $$ = new Primitivo(Number($1), @1.first_line, @1.first_column); }
    | StringLiteral                     { $$ = new Primitivo($1, @1.first_line, @1.first_column); }
    | charliteral                       { $$ = new Primitivo($1, @1.first_line, @1.first_column); }
    | null                              { $$ = new Primitivo(null, @1.first_line, @1.first_column); }
    | true                              { $$ = new Primitivo(true, @1.first_line, @1.first_column); }
    | false                             { $$ = new Primitivo(false, @1.first_line, @1.first_column); } ;
    */