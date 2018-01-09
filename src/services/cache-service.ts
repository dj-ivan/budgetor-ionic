import { Injectable } from '@angular/core';
import { User } from '../types/user-model';
import { Expense, ExpenseCategory, ExpenseType } from '../types/expense-model';

@Injectable()
export class CacheService {

  public user: User = new User();
  public expenses: Expense[] = [];
  public expenseCategories: ExpenseCategory[] = [
    new ExpenseCategory, {
      name: 'Housing',
      categoryId: 1
    },
    new ExpenseCategory, {
      name: 'Utilities',
      categoryId: 2
    },
    new ExpenseCategory, {
      name: 'Food and Groceries',
      categoryId: 3
    },
    new ExpenseCategory, {
      name: 'Personal Care',
      categoryId: 4
    },
    new ExpenseCategory, {
      name: 'Entertainment',
      categoryId: 5
    }
  ];
  public expenseTypes: ExpenseType[] = [
    new ExpenseType, {
      name: 'Fixed Expense',
      typeId: 1
    },
    new ExpenseType, {
      name: 'Variable Expense',
      typeId: 2
    }
  ];

  constructor() { }
}