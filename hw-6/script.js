
// Задание 1
// const arr = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 10) {
//     break;
//   }
//   console.log(arr[i]);
// }

// Задание 1

// const arr = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 10) break;
//   console.log(arr[i]);
// }

// Задание 2 - Поиск индекса
// const arr = [1, 5, 4, 10, 0, 3];
// console.log(arr.indexOf(4));
// Задание 2 - вывод по индексу
// const arr = [1, 5, 4, 10, 0, 3];
// console.log(arr[2]);

// задание 3
// let number = [1, 3, 5, 10, 20];
// number = number.join(" ");
// console.log(number);

// Задание 4 не понял как делать

// Задание 5
// const arr = [1, 1, 1];
// arr.push(2, 2, 2);
// console.log(arr);

// Задание 6
// let arr = [9, 8, 7, "a", 6, 5];
// arr = arr.sort();
// arr.pop();
// console.log(arr);

// Задание 7
// let arr = [9, 8, 7, 6, 5];
// let number = Number(prompt("Угадай число"));
// if (arr.includes(number)) {
//   alert("Угадал");
// } else {
//   alert("Не угадал");
// }

// Задание 8
// let arr = "abcdef";
// let secondArr = arr.split("");
// secondArr.reverse();
// secondArr = secondArr.join('')
// console.log(secondArr);

// Задание 9 - Не понял как делать
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// for (let item of arr) {
//   for (let element of item) {
//     console.log(element);
//   }
// }

// Задание 10
// let arr = [1, 3, 5, 6, 8, 9, 10];
// for()

// Задание 11
// const salary = [2, 4, 6, 8, 10];
// function square(salary) {
//   let result = salary.map((item) => item ** 2);
//   console.log(result);
// }
// square(salary);

// Задание 12
// const arr = ["абвгд", "еёжз", "иклмн", "опрст"];
// function lengthOfWords(arr) {
//   return arr.map((word) => word.length);
// }
// const wordLen = lengthOfWords(arr);
// console.log(wordLen);
// Задание 13


// Новые методы и способы 
// let products = ["Yaroslav", "Marik", "Kamarik"];
// products[2] = "Валюха";
// products[3] = "Feya"
// console.log(products[0]);
// console.log(products[1]);
// console.log(products[2]);
// console.log(products[3]);

// const numbs = [1, 5, 2, 6];
// for (let i = 0; i < numbs.length; i++) {
//   console.log(numbs[i]);
// }

// const numbs = [1, 3, 5, 6, 8];
// numbs.forEach((el, index, arr) => {
//   console.log(`${index}: ${el}, массив: ${arr}`);
// });

//Метод split

//Метод Sort
// let letters = ["C", "W", "D", "B", "A"];
// letters = letters.sort();
// console.log(letters);

//Метод join()
// let letters = ["M", "O", "T", "H", "E"];
// letters = letters.join("");
// console.log(letters);

// Метод pop()
// let products = ["Armchair", "Chair", "Table"];
// console.log(products.pop());
// console.log(products);

// Метод push()
// let products = ["Armchair", "Chair", "Table"];
// products.push("Dresser");
// console.log(products);

// Метод unshift()
// let products = ["Armchair", "Chair", "Table"];
// products.unshift("Dresser");
// console.log(products);

// Метод shift()
// let products = ["Armchair", "Chair", "Table"];
// console.log(products.shift());
// console.log(products);

// Метод filter
// const age = [10, 11, 14, 9, 18, 20, 25, 30];
// const result = age.filter((item) => item >= 12);
// console.log(result);

// Метод map
// const salary = [1000000, 100000, 50000, 70000, 31000];
// let result = salary.map((item) => item - item * 0.13);
// console.log(result);

// Метод reduce
// const arr = [1, 2, 3, 4];
// const result = arr.reduce((intremediate, value) => intremediate + value);
// console.log(result);

// Многомерный массив пример:
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(arr[0][0]);

// Перебор массива
// let arr = ["Armchair", "Chair", "Table"];
// for (let item of arr) {
//   console.log(item);
// }

// Перебор многомерного массива\
// let arr = [
//   [1, 2],
//   [3, 4],
//   [6, 7],
// ];
// for (let arrIn of arr) {
//     console.log(arrIn);
//   for (let element of arrIn) {
//     console.log(element);
//   }
// }

// Метод includes
// let num = [1, 2, 3, 4, 5, 6, 7];
// let search = num.includes(5);
// console.log(search);

// Оператор spread
// херня какая-то

// Оператор rest
// let arrSum = [3, 4, 5, 6];

// const sum = (a, b, rest) => {
//   let result = a + b;
//   console.log(result);
//   console.log(rest);
// };
// sum(...arrSum);

// const newspaper = {
//   sports: "ARod Hits Home Run",
//   sportsWriters: ["Miramon Nuevo", "Rick Reilly", "Woddy Paige"],
//   business: "GE Stock Dips Again",
//   businessWriters: ["Adam Smith", "Albert Humphrey", "Charles Handy"],
//   movies: "Superman Is A Flop",
//   moviesWriters: ["Rogert Ebert", "Andrew Sarris", "Wesley Morris"],
// };

//Сложная задача
// const newspaper = {
//   sports: {
//     title: "ARod Hits Home Run",
//     writers: ["Miramon Nuevo", "Rick Reilly", "Woddy Paige"],
//   },
//   business: {
//     title: "GE Stock Dips Again",
//     writers: ["Adam Smith", "Albert Humphrey", "Charles Handy"],
//   },
//   movies: {
//     title: "Superman Is A Flop",
//     writers: ["Rogert Ebert", "Andrew Sarris", "Wesley Morris"],
//   },
// };

// newspaper.sports.title; // ARod Hits Home Run
// newspaper.business.writers[0]; // Adam Smith
// newspaper["movies"]["title"]; // Superman Is A Flop

// Task first
// const arr = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] === 10) break;
//   console.log(arr[i]);
// }

//Task second
// const arr = [1, 5, 4, 10, 0, 3];
// console.log(arr.indexOf(4));

//Task three
// let arr = [1, 3, 5, 10, 20];
// console.log(arr.join(" "));

//Task four
// let array = [];
// // Внешний цикл для создания строк
// for (let i = 0; i < 3; i++) {
//   // Создаем пустую строку
//   let row = [];
//   // Внутренний цикл для создания столбцов
//   for (let j = 0; j < 3; j++) {
//     row.push(1);
//   }
//   // Добавляем строку в многомерный массив
//   array.push(row);
// }
// console.log(array);

//Task five
// let arr = [1, 1, 1];
// arr.push(2, 2, 2);
// console.log(arr);

//Task six
// let arr = [9, 8, 7, "a", 6, 5];
// arr.sort().pop();
// console.log(arr);

//Task seven
// let arr = [9, 8, 7, 6, 5];
// let ask = Number(prompt("Угадай число"));
// if (arr.includes(ask)) {
//   alert("Угадал");
// } else {
//   alert("Не угадал");
// }

//Task eight
// let str = "abcdef";
// console.log((str = str.split("").reverse().join("")));

//Task nine
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// const flatArr = arr.flat();
// console.log(flatArr);

//Task ten
// let amount = 0;
// let arr = [1, 3, 4, 6, 7, 9, 10];
// for (let i = 0; i < arr.length - 1; i++) {
//   let sum = arr[i] + arr[i + 1];
//   console.log(sum);
// }

// let amount = 0;
// let arr = [1, 3, 4, 6, 7, 9, 10];
// for (let i = 0; i < arr.length - 1; i++) {
//   let sum = arr[i] + arr[i + 1];
//   console.log(`Сумма, ${arr[i]}, и , ${arr[i + 1]}, равна ${sum}`);
// }

//Task eleven
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const square = arr.map((num) => num ** 2);
// console.log(square);

//Task twelve
// const arr = ["Ярослав", "Ольшанский"];
// let newArr = arr.map((word) => word.length);
// console.log(newArr);

//Task thirteen
// const arr = [1, -2, 3, -4, 5, -6, 7, 8, -9, 10];
// function getNegative(array) {
//   let negatives = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//       negatives.push(array[i]);
//     }
//   }
//   return negatives;
// }
// console.log(getNegative(arr));

//Task fourteen
// let array = [];
// for (let i = 0; i < 10; i++) {
//   let randomValue = Math.floor(Math.random() * 11);
//   array.push(randomValue);
// }
// console.log(`Массив с рандомными числами ${array}`);

// let count = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0) {
//     count.push(array[i]);
//   }
// }
// console.log(`Массив с рандомными числами ${count}`);

//Task fifteen
// let array = [];
// for (let i = 0; i < 6; i++) {
//   let randomValue = Math.floor(Math.random() * 11);
//   array.push(randomValue);
// }
// let sum = array.reduce(function (acc, val) {
//   return acc + val;
// }, 0);
// let average = sum / array.length;
// console.log(`Массив с рандомными числами ${array}`);
// console.log(`Среднее арифмитическое ${average}`);

