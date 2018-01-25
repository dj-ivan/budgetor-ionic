import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Expense } from '../../types/expense-model';
import { CacheService } from '../../services/cache-service';

/**
 * Generated class for the SetupExpensesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-setup-expenses',
  templateUrl: 'setup-expenses.html',
})
export class SetupExpensesPage {
  public expenses: Expense[] = [
    {
      category: this.cache.expenseCategories[1],
      type: this.cache.expenseTypes[1],
      expenseId: 1,
      name: 'Rent',
      amount: 2344
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public cache: CacheService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetupExpensesPage');
  }

  public addExpense() {
    console.log('It works!')
  }

}
