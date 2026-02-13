import { capitalize, reverseString } from "./stringUtils";
import { Finance } from "./finance";
import { UserManagement } from "./userManagement";
import { generateFibonacci, generatePrimeNumbers } from "./sequenceUtils";

// ===== Задание 1 =====
console.log(capitalize("hello world"));
console.log(reverseString("TypeScript"));

// ===== Задание 2 =====
const loan = new Finance.LoanCalculator(100000, 5, 24);
console.log("Monthly payment:", loan.calculateMonthlyPayment());

const tax = new Finance.TaxCalculator(5000, 20);
console.log("Tax:", tax.calculateTax());

// ===== Задание 3 =====
const admin = new UserManagement.Admin.AdminUser(
  "Alina",
  "alina@mail.com",
  false
);

console.log("Is super admin:", admin.isSuperAdmin);
admin.grantSuperAdmin();
console.log("After grant:", admin.isSuperAdmin);

// ===== Задание 4 =====
console.log("Fibonacci:", generateFibonacci(50));
console.log("Primes:", generatePrimeNumbers(50));
