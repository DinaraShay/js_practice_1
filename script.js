//Задача 1
// const num = Number(prompt());

// function numBuzz(num) {
//     if(num % 3 === 0 && num % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if(num % 3 === 0) {
//         console.log("Fizz");
//     } else if(num % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log("Ничего");
//     }
// }

// numBuzz(num);

//Задача 2
// const num1 = Number(prompt());

// function numBuzz1(num1) {
//     for(let i = 0; i <= num1; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//         } else if(i % 3 === 0) {
//             console.log("Fizz");
//         } else if(i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log("Ничего");
//         }
//     }
// }

// numBuzz(num1);

//Задача 3
// const password = prompt();
// const correctPassword = "1234";
// const attempts = 3;

// for(let i = 0; i <= attempts; i++ ) {
//     if(password === correctPassword) {
//         console.log("Доступ разрешён");
//     } else {
//         console.log("Доступ запрещён");
//     }
// }


// Задача 4
// let answer = prompt("Столица Франции?").toLowerCase();
// let answer1 = prompt("2 + 2?").toLowerCase();
// let answer2 = prompt("Цвет неба?").toLowerCase();
// let correctCount = 0;


// switch(answer) {
//     case "париж":
//         console.log("Вопрос 1: Правильно");
//         correctCount = correctCount + 1
//         break;
// }

// switch(answer1) {
//     case "4":
//         console.log("Вопрос 2: Правильно");
//         correctCount = correctCount + 1
//         break;
// }

// switch(answer2) {
//     case "голубой":
//         console.log("Вопрос 3: Правильно");
//         correctCount = correctCount + 1
//         break;
// }

// console.log(`Вы набрали ${correctCount} из 3`);

// Задача 5
// let symbol = prompt();
// let regexp = /^[a-z]$/;
// let num = /^[0-9]$/;

// if(symbol.match(num)) {
//     console.log("Цифра");
// } else if(symbol.match(regexp)) {
//     console.log("Буква")
// } else {
//     console.log("Неизвестный символ")
// }

// Задача 6
// let num = prompt();

// let reverse = num.split('').reverse().join('');
// console.log(reverse);

//Задача 7
// let num = prompt();
// let sum = num.split('');
// let total = 0;

// sum.forEach((number) => {
//     let numberCount = Number(number);
//     total = total + numberCount;
// });

//Задача 8
// const value = Math.floor(Math.random() * 50) + 1;
// let steps = 7;
// let win = false;

// for (let i = 0; i < steps; i++) {
//     let guess = Number(prompt(`Попытка ${i + 1}. Ваше число:`));
//     if (guess === value) {
//         console.log(`Поздравляю! Вы угадали число ${value} за ${i + 1} попыток!`);
//         win = true;
//         break;
//     } else if (guess > value) {
//         console.log("Загаданное число МЕНЬШЕ.");
//     } else {
//         console.log("Загаданное число БОЛЬШЕ.");
//     }
// }

// if (!win) {
//     console.log(`Ты проиграл! Загаданное число было ${value}.`);
// }

// Задача 9
// let num = prompt();
// let symbols = prompt();

// let total = num.split("").join(symbols);
// console.log(total)

// Задача 10

let password = prompt();

for(let i = 6; i < 20; i++) {
    console.log()
    // if() {
    //     console.log("Пароль надёжный")
    // } else {
    //     console.log("Пароль слабый")
    // }
}
