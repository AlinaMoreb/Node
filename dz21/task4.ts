abstract class Account {
  protected balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;

  getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends Account {
  private interestRate: number;

  constructor(initialBalance: number, interestRate: number) {
    super(initialBalance);
    this.interestRate = interestRate;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Not enough money");
    }
  }

  addInterest(): void {
    this.balance += this.balance * this.interestRate;
  }
}

class CheckingAccount extends Account {
  private fee: number;

  constructor(initialBalance: number, fee: number) {
    super(initialBalance);
    this.fee = fee;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    const total = amount + this.fee;
    if (total <= this.balance) {
      this.balance -= total;
    } else {
      console.log("Not enough money including fee");
    }
  }
}

const savings = new SavingsAccount(1000, 0.05);
savings.deposit(500);
savings.addInterest();
console.log("Savings balance:", savings.getBalance());

const checking = new CheckingAccount(1000, 10);
checking.withdraw(100);
console.log("Checking balance:", checking.getBalance());
