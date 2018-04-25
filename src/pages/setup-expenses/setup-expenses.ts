import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Expense, ExpenseCategory, ExpenseType } from '../../types/expense-model';
import { CacheService } from '../../services/cache-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  public types: ExpenseType[] = this.cache.expenseTypes;
  public newExpense = {} as Expense;
  public id = 1;
  public expenseForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public cache: CacheService,
    private formBuilder: FormBuilder,) {
    console.log(this.categories);
    this.expenseForm = this.formBuilder.group({
      monthlyIncome: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetupExpensesPage');
  }

  public addExpense() {
    console.log('Adding Expense!');
    console.log(this.newExpense);
    this.newExpense.expenseId = this.id++;

    this.expenses.push(this.newExpense);

    try {
      this.cache.expenses = this.expenses;
      this.newExpense = {} as Expense;
    } catch (error) {
      console.log('Failed to add new expense to cache')
    }
    
  }

  public removeExpense(expense: Expense) {
    debugger;
    console.log(`Removing expense`, expense);
    let index = this.expenses.indexOf(expense);
    this.expenses.splice(index,1);
  }
}
