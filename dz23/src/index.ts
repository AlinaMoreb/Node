// ===============================
// ЗАДАНИЕ 1
// Последовательное выполнение
// ===============================

function delayTask(name: string, delay: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task ${name} finished after ${delay}ms`);
    }, delay);
  });
}

async function runSequentialTasks() {
  console.log("Starting sequential tasks...");

  const result1 = await delayTask("A", 1000);
  console.log(result1);

  const result2 = await delayTask("B", 2000);
  console.log(result2);

  const result3 = await delayTask("C", 1500);
  console.log(result3);

  console.log("All sequential tasks finished\n");
}


// ===============================
// ЗАДАНИЕ 2
// Promise.all параллельно
// ===============================

function asyncUppercase(str: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(str.toUpperCase());
    }, 1000);
  });
}

async function processStrings(strings: string[]) {
  const promises = strings.map(str => asyncUppercase(str));
  const results = await Promise.all(promises);

  console.log("Parallel uppercase results:", results, "\n");
}


// ===============================
// ЗАДАНИЕ 3
// Обработка ошибки
// ===============================

function successTask(name: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${name} success`), 1000);
  });
}

function failTask(): Promise<string> {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Intentional error"), 1500);
  });
}

async function runParallelWithError() {
  try {
    const results = await Promise.all([
      successTask("Task 1"),
      failTask(),
      successTask("Task 3")
    ]);

    console.log(results);
  } catch (error) {
    console.log("Error caught:", error, "\n");
  }
}


// ===============================
// ЗАДАНИЕ 4
// Динамическое время выполнения
// ===============================

function numberDelayTask(num: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Finished after ${num}ms`);
    }, num);
  });
}

async function processNumbers(numbers: number[]) {
  const promises = numbers.map(num => numberDelayTask(num));
  const results = await Promise.all(promises);

  console.log("Dynamic results:", results);
}


// ===============================
// ВЫЗОВ ВСЕХ ФУНКЦИЙ
// ===============================

async function main() {
  await runSequentialTasks();
  await processStrings(["hello", "world", "typescript"]);
  await runParallelWithError();
  await processNumbers([500, 1000, 1500, 700]);
}

main();
