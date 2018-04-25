import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SetupUserPage } from '../../setup-user/setup-user';
import { fadeInAnimation } from '../../../app/_animations/index';

@Component({
  selector: 'page-home',
  animations: [fadeInAnimation],
  templateUrl: 'step-1.html',
  host: { '[@fadeInAnimation]': '' }
})
export class Step1 {

  constructor(public navCtrl: NavController) {
    setTimeout(() => {
      this.navigateToSetup();
    }, 2500);
  }

  public navigateToSetup() {
    // navigate to the new page if it is not the current page
    this.navCtrl.push(SetupUserPage);
  }

}
