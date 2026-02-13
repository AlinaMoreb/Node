"use strict";
// ===============================
// ЗАДАНИЕ 1
// Последовательное выполнение
// ===============================
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function delayTask(name, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${name} finished after ${delay}ms`);
        }, delay);
    });
}
function runSequentialTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Starting sequential tasks...");
        const result1 = yield delayTask("A", 1000);
        console.log(result1);
        const result2 = yield delayTask("B", 2000);
        console.log(result2);
        const result3 = yield delayTask("C", 1500);
        console.log(result3);
        console.log("All sequential tasks finished\n");
    });
}
// ===============================
// ЗАДАНИЕ 2
// Promise.all параллельно
// ===============================
function asyncUppercase(str) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(str.toUpperCase());
        }, 1000);
    });
}
function processStrings(strings) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = strings.map(str => asyncUppercase(str));
        const results = yield Promise.all(promises);
        console.log("Parallel uppercase results:", results, "\n");
    });
}
// ===============================
// ЗАДАНИЕ 3
// Обработка ошибки
// ===============================
function successTask(name) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${name} success`), 1000);
    });
}
function failTask() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Intentional error"), 1500);
    });
}
function runParallelWithError() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const results = yield Promise.all([
                successTask("Task 1"),
                failTask(),
                successTask("Task 3")
            ]);
            console.log(results);
        }
        catch (error) {
            console.log("Error caught:", error, "\n");
        }
    });
}
// ===============================
// ЗАДАНИЕ 4
// Динамическое время выполнения
// ===============================
function numberDelayTask(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Finished after ${num}ms`);
        }, num);
    });
}
function processNumbers(numbers) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = numbers.map(num => numberDelayTask(num));
        const results = yield Promise.all(promises);
        console.log("Dynamic results:", results);
    });
}
// ===============================
// ВЫЗОВ ВСЕХ ФУНКЦИЙ
// ===============================
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield runSequentialTasks();
        yield processStrings(["hello", "world", "typescript"]);
        yield runParallelWithError();
        yield processNumbers([500, 1000, 1500, 700]);
    });
}
main();
