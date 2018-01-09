export class ExpenseCategory {
    name: string;
    categoryId: number;
  }
  
  export class ExpenseType {
    name: string;
    typeId: number;
  }
  
  export class Expense {
    category: ExpenseCategory;
    type: ExpenseType;
    expenseId: number;
    name: string;
    amount: number;
  }
  