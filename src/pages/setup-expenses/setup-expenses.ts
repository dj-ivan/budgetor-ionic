import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
  Expense,
  ExpenseCategory,
  ExpenseType
} from '../../types/expense-model';
import { CacheService } from '../../services/cache-service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'page-setup-expenses',
  templateUrl: 'setup-expenses.html'
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
  public expenseForm: FormGroup;
  public id = 1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cache: CacheService,
    public formBuilder: FormBuilder
  ) {
    this.expenseForm = this.formBuilder.group({
      category: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      amount: new FormControl(
        undefined,
        Validators.compose([Validators.required, Validators.min(1)])
      )
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetupExpensesPage');
  }

  public addExpense() {
    if (!this.expenseForm.valid) return;

    this.newExpense = {
      category: this.expenseForm.controls['category'].value,
      type: this.expenseForm.controls['type'].value,
      name: this.expenseForm.controls['name'].value,
      amount: this.expenseForm.controls['amount'].value,
      expenseId: this.id++
    };

    try {
      this.expenses.push(this.newExpense);
      this.cache.expenses = this.expenses;
      this.newExpense = {} as Expense;
    } catch (error) {
      console.log('Failed to add new expense to cache');
    }
  }

  public removeExpense(expense: Expense) {
    let index = this.expenses.indexOf(expense);
    this.expenses.splice(index, 1);
    if (!this.expenses.length) {
      this.expenses = [];
    }
  }
}
