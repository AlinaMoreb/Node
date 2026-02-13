export namespace Finance {

  export class LoanCalculator {
    constructor(
      private principal: number,
      private annualRate: number,
      private months: number
    ) {}

    calculateMonthlyPayment(): number {
      const monthlyRate = this.annualRate / 12 / 100;
      const payment =
        (this.principal * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -this.months));

      return Number(payment.toFixed(2));
    }
  }

  export class TaxCalculator {
    constructor(private income: number, private taxRate: number) {}

    calculateTax(): number {
      return Number((this.income * this.taxRate / 100).toFixed(2));
    }
  }
}
