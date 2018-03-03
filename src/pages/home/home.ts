import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  test:string = "TEST IONIC3 FRAMEWORK";
  click:string;
  constructor(public navCtrl: NavController) {

  }
  updateMyValue(){
    this.click = "welcome to ionic3 framework";
  }

}
