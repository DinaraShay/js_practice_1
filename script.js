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

