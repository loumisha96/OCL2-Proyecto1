class TablaSim {
  public tabla;
  
  constructor(){
    this.tabla = new Array();
  }
  addSimbolo(simbolo:any){
    this.tabla.push(simbolo);
  }
  getTabla(){
    return this.tabla;
  }
}