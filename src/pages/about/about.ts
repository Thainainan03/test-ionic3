import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AbountDetailsPage } from '../abount-details/abount-details';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  getAboutDetails(){
    this.navCtrl.push(AbountDetailsPage);
  }
}
