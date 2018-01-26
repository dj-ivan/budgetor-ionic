import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Expense, ExpenseCategory, ExpenseType } from '../../types/expense-model';
import { CacheService } from '../../services/cache-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  public categories: ExpenseCategory[] = this.cache.expenseCategories;
  public newExpense = '';
  public expenseForm: FormGroup;
  public id: 1;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public cache: CacheService,
    private formBuilder: FormBuilder,) {
      this.expenseForm = this.formBuilder.group({
        expenseCategory: ['', Validators.required],
        expenseType:  ['', Validators.required],
        name:  ['', Validators.required],
        amount:  ['', Validators.required]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetupExpensesPage');
  }

  public addExpense() {
    console.log('It works!');
    console.log(this.expenseForm.value);
    let expenseType = {
    name: this.expenseForm.value.expenseType
    } as ExpenseType;
    let expenseCategory = {
      name: this.expenseForm.value.expenseCategory
    } as ExpenseCategory;
    let newExpense = {
      category: expenseCategory,
      type: expenseType,
      expenseId: this.id++,
      name: this.expenseForm.value.name,
      amount: this.expenseForm.value.amount
    } as Expense;
    this.expenses.push(newExpense);
    this.expenseForm.reset();
  }



}
