export class Goal {
  name: string;
  type: GoalType;
  date: string;
}

export class GoalType {
  name: string;
  amount: number;

}

export class Debt extends GoalType {
  interest: number;
  minimumPayment: number;
}

export class Savings extends GoalType {

}
