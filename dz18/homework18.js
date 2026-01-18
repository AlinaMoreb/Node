var adminUser = {
    name: "Alice",
    email: "alice@example.com",
    permissions: ["read", "write"]
};
function printCarInfo(car) {
    console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(car.make, ", \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(car.model, ", \u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C: ").concat(car.engine.type, ", \u041B.\u0421.: ").concat(car.engine.horsepower).concat(car.year ? ", Год: " + car.year : ""));
}
var calculateDiscount = function (product, discount) {
    return product.price - product.price * discount;
};
var employees = [
    { name: "John", salary: 1000 },
    { name: "Jane", salary: 1500 },
    { name: "Bob", salary: 1200 }
];
function getSalaries(employees) {
    return employees.map(function (emp) { return emp.salary; });
}
var student = {
    firstName: "Alice",
    lastName: "Smith",
    grade: 95
};
function printStudentInfo(student) {
    console.log("\u0421\u0442\u0443\u0434\u0435\u043D\u0442: ".concat(student.firstName, " ").concat(student.lastName, ", \u041E\u0446\u0435\u043D\u043A\u0430: ").concat(student.grade));
}
var concatStrings = function (str1, str2) { return str1 + str2; };
// Тестирование функции
var result = concatStrings("Hello, ", "world!");
console.log(result);
