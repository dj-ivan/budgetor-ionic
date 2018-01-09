import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SetupUserPage } from '../setup-user/setup-user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public navigateToSetup() {
    // navigate to the new page if it is not the current page
    // TODO: Replace with the user setup page
    this.navCtrl.push(SetupUserPage);
  }

}
