import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { fadeInAnimation } from '../../../app/_animations/index';
import { SetupExpensesPage } from '../../setup-expenses/setup-expenses';

@Component({
  selector: 'page-home',
  animations: [fadeInAnimation],
  templateUrl: 'step-2.html',
  host: { '[@fadeInAnimation]': '' }
})
export class Step2 {

  constructor(public navCtrl: NavController) {
    setTimeout(() => {
      this.navigateToSetup();
    }, 3250);
  }

  public navigateToSetup() {
    // navigate to the new page if it is not the current page
    this.navCtrl.push(SetupExpensesPage);
  }

}
