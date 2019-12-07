import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coef_a: string;
  coef_b: string;
  coef_c: string;
  

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    
  }

  calculate(){
    var r1: number;
    var r2: number;
    var a: number;
    var b: number;
    var c: number;
    a = parseFloat(this.coef_a);
    b = parseFloat(this.coef_b);
    c = parseFloat(this.coef_c);

    r1 = (-b + Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
    r2 = (-b - Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
    let alert = this.alertCtrl.create({
      title: "Raices",
      subTitle: "R1: "+r1+"   R2: "+r2,
      buttons: ['Close']
    });
    alert.present();
  }

}

