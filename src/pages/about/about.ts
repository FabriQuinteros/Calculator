import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  @ViewChild('target2') target2Element:any;
  @ViewChild('target3') target3Element:any;
  
  
  screen: string ;
  
  
  constructor(public navCtrl: NavController) {
    this.screen="";
  }

  public tecla(t: string){
    this.screen+=t;
  }

  public borrar(){
    this.screen="";
  }

  public calcular(){
    this.screen=eval(this.screen)
  }

  public borrarIndividual(){
    this.screen=this.screen.substring(0,this.screen.length-1)
  }


ngOnInit(){
  //Seteamos las variables para saber la altura de estos elementos HTML
  let height2;
  let height3;
  let heightWindows;
  //Obtenemos las alturas
  height2= this.target2Element.nativeElement.offsetHeight;
  height3= this.target3Element.nativeElement.offsetHeight;
  //esta es la altura de todo el dispositivo
  heightWindows= window.innerHeight;  

  
  //printeamos en la consola
  console.log("Display:",height2);
  console.log("Calculadora:",height3);
  console.log("Altura Total:",heightWindows); 
  
  //Hacemos el calculo para saber cuanto sobra o cuanto falta
  let resta: number;
  resta= heightWindows-(height2+height3+50);
  console.log("La resta es: ",resta);
  //declaramos la variable que va a conterner al elemento modificable
  let heightTotal;
  let heightTeclas;
  //dependiendo de la respuesta agranda o achica el display
  if(resta<0){
    resta=resta*-1;
    
    heightTotal=document.getElementById('displayPanel');
    heightTotal.style.height= (150-resta)+"px";
    
  }else if (resta>0){

    resta=resta*1;
    
    heightTotal=document.getElementById('displayPanel');
    heightTotal.style.height= (150+resta)+"px";
      
  }
  

  //Volvemos a sacar las alturas actualizadas
  height2= this.target2Element.nativeElement.offsetHeight;
  height3= this.target3Element.nativeElement.offsetHeight;
  heightWindows= window.innerHeight;  

  
  
  console.log("Display New:",height2);
  console.log("Calculadora New:",height3);
  console.log("Altura Total New:",heightWindows); 
  
  resta= heightWindows-(height2+height3+50);
  console.log("La resta new es: ",resta);
}







}
