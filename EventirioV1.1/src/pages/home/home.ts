import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DescripcionPage} from '../descripcion/descripcion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ngOnInit () {}

  irDescripcion(){

    this.navCtrl.push( DescripcionPage );
  }

}
