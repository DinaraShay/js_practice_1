//Задача 1
const num = Number(prompt());

function numBuzz(num) {
    if(num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if(num % 3 === 0) {
        console.log("Fizz");
    } else if(num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log("Ничего");
    }
}

numBuzz(num);

//Задача 2
const num1 = Number(prompt());

function numBuzz1(num1) {
    for(let i = 0; i <= num1; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        } else if(i % 3 === 0) {
            console.log("Fizz");
        } else if(i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log("Ничего");
        }
    }
}

numBuzz(num1);

//Задача 3
const password = prompt();
const correctPassword = "1234";
const attempts = 3;

for(let i = 0; i <= attempts; i++ ) {
    if(password === correctPassword) {
        console.log("Доступ разрешён");
    } else {
        console.log("Доступ запрещён");
    }
}


// Задача 4
