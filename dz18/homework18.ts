// Задание 1: объединение типов
type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

const adminUser: AdminUser = {
  name: "Alice",
  email: "alice@example.com",
  permissions: ["read", "write"]
};

// Задание 2: вложенные объекты и опциональные поля
type Engine = {
  type: string;
  horsepower: number;
};

type Car = {
  make: string;
  model: string;
  engine: Engine;
  year?: number;
};

function printCarInfo(car: Car): void {
  console.log(`Марка: ${car.make}, Модель: ${car.model}, Двигатель: ${car.engine.type}, Л.С.: ${car.engine.horsepower}${car.year ? ", Год: " + car.year : ""}`);
}

// Задание 3: интерфейс для функции с объектом
interface Product {
  name: string;
  price: number;
}

interface CalculateDiscount {
  (product: Product, discount: number): number;
}

const calculateDiscount: CalculateDiscount = (product, discount) => {
  return product.price - product.price * discount;
};

// Задание 4: массив объектов и функция
interface Employee {
  name: string;
  salary: number;
}

const employees: Employee[] = [
  { name: "John", salary: 1000 },
  { name: "Jane", salary: 1500 },
  { name: "Bob", salary: 1200 }
];

function getSalaries(employees: Employee[]): number[] {
  return employees.map(emp => emp.salary);
}

// Задание 5: наследование интерфейсов
interface Person {
  firstName: string;
  lastName: string;
}

interface Student extends Person {
  grade: number;
}

const student: Student = {
  firstName: "Alice",
  lastName: "Smith",
  grade: 95
};

function printStudentInfo(student: Student): void {
  console.log(`Студент: ${student.firstName} ${student.lastName}, Оценка: ${student.grade}`);
}

// Задание 6: интерфейс для функции с несколькими параметрами
interface ConcatStrings {
  (str1: string, str2: string): string;
}

const concatStrings: ConcatStrings = (str1, str2) => str1 + str2;

// Тестирование функции
const result = concatStrings("Hello, ", "world!");
console.log(result);
