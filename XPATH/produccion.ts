import {reporteGramatica} from "./reporteGramatica";

export class producion implements reporteGramatica{
    producion:string;
    constructor(){
        this.producion = " ";
    }
    getGramatica(tipo:string):string{

        switch (tipo) {
            case "ini":
                this.producion += "ini \n" +
                            "\t :XPATH EOF {}\n;\n"
                            
                break;
            case "xpath":
                this.producion+="XPATH\n"+
                                "\t:XPATH barra TIPO_STEP {}\n"+
                                "\t|TIPO_STEP {}\n ;\n"
                break;
            case "tipo_step":
                this.producion+="TIPO_STEP\n"+
                                "\t:TIPO_STEP OPT PATH{}\n" +
                               "\t |OPT PATH{}\n" ;
                                
                break;
            case "opt":
                this.producion+="OPT\n"+
                                "\t:slash\n"+ 
                                "\t|doubleSlash\n"+
                                "\t|PATH\n;\n";
                break;
            case "path":
                this.producion+="PATH\n"+
                                "\t:OPTIONS{}\n"+
                                "\t|WILDCARD{}\n"+
                                "\t|AXIS\n;\n";
                break;
            case "options":
                this.producion+="OPTIONS\n"+
                                "\t:id LIST_PREDICATE{}\n"+
                                "\t|id{}\n;\n";
                break;
            case "list_pred":
                this.producion +="LIST_PREDICATE\n"+
                                "\t:LIST_PREDICATE PREDICATE\n"+
                                "\t|PREDICATE\n;\n";
                break;
            case "axis":
                this.producion+="AXIS\n"+
                                "\t :AXIS_NAME doubleColon \n"+
                                "\t |AXIS_NAME \n;\n"
                break;
            case "axis_name":
                this.producion+="AXIS_NAME\n"+
                                "\t:ancestor{}\n"+
                                "\t|ancestor_or_self{}\n"+
                                "\t|attribute{}\n"+
                                "\t|child{}\n"+
                                "\t|descendant{}\n"+
                                "\t|descendant_or_self{}\n"+
                                "\t|following{}\n"+
                                "\t|following_sibling{}\n"+
                                "\t|namespace{}\n"+
                                "\t|parent{}\n"+
                                "\t|preceding{}\n"+
                                "\t|preceding_sibling{}\n"+
                                "\t|self{}\n;\n";
                break;
            case "predicate":
                this.producion+="PREDICATE\n"+
                                "\t:corcheteIzq E corcheteDer{}\n;"; 
                break;
            case "e":
                this.producion+="E\n"+
                                "\t:E add E {}\n"+
                                "\t|E minus E{}\n"+
                                "\t|E asterisk E{}\n"+
                                "\t|E slash E{}\n"+
                                "\t|E equal E{}\n"+
                                "\t|E diferent E{}\n"+
                                "\t|E menor E{}\n;\n";
                    break;
            case "wild":
                this.producion+="WILDCARD\n"+
                                "\t:asterisk{}\n"+
                                "\t|at asterisk{}\n"+
                                "\t|node corcheteIzq corcheteDer{}\n;\n";
                    break;
            default:
                break;
        }
        



        return this.producion;
    }
    
}