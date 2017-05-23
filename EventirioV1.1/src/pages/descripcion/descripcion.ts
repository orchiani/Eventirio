import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SliderPage } from '../slider/slider';


@Component({
  selector: 'page-descripcion',
  templateUrl: 'descripcion.html'
})
export class DescripcionPage {

  constructor(public navCtrl: NavController) {


}

ngOnInit () {}

irSlider(){

  this.navCtrl.push( SliderPage );

}

}
