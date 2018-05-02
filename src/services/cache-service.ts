import { Injectable } from '@angular/core';
import { User } from '../types/user-model';
import { Expense, ExpenseCategory, ExpenseType } from '../types/expense-model';
import { Account } from '../types/account-model';
import { Income } from '../types/income-model';

@Injectable()
export class CacheService {

  public account: Account = new Account();
  public income: Income = new Income();
  public user: User = new User();
  public expenses: Expense[] = [];

  // Seeding the db
  public expenseCategories: ExpenseCategory[] = [
    {
      name: 'Housing',
      categoryId: 1
    } as ExpenseCategory,
    {
      name: 'Utilities',
      categoryId: 2
    } as ExpenseCategory,
    {
      name: 'Food and Groceries',
      categoryId: 3
    } as ExpenseCategory,
    {
      name: 'Personal Care',
      categoryId: 4
    } as ExpenseCategory,
    {
      name: 'Entertainment',
      categoryId: 5
    }
  ];
  public expenseTypes: ExpenseType[] = [
    {
      name: 'Fixed Expense',
      typeId: 1
    } as ExpenseType,
    {
      name: 'Variable Expense',
      typeId: 2
    } as ExpenseType
  ];

  constructor() { }
}
