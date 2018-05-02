import { Goal } from './goal-model';
import { Income } from './income-model';
import { User } from './user-model';
import { Expense } from './expense-model';

export class Account {
  user: User;
  income: Income;
  expenses: Expense[];
  goals: Goal[];
}
