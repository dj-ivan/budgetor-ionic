import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Step1 } from '../transition-pages/step-1/step-1'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public navigateToSetup() {
    // navigate to the new page if it is not the current page
    this.navCtrl.push(Step1);
  }

}
