// 1.Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
let arr = [1, '2', 3, ['4', 5], 10, 'six', 7, [1, [2, 3, [4, [6, [8, '3']]]]]];

function getAverage(array) {
    let customNumbersArr = [];

    function getNumbers(arrayForCheck) {
        arrayForCheck.forEach((el) => {
            if (typeof el === 'number') {
                customNumbersArr.push(el);
            } else if (Array.isArray(el)) {
                getNumbers(el);
            }
        });
    }

    getNumbers(array);

    let sum = 0;
    let count = 0;
    customNumbersArr.forEach((el) => {
        sum += el;
        count++;
    });

    return Number((sum / count).toFixed(2));
}

console.log(getAverage(arr));

//2.Hаписати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

// function askForNumber() {
//     let askedNumber = +prompt('Enter valid number');
//     if (typeof askedNumber === 'number' && !isNaN(askedNumber) && typeof askedNumber !== "undefined") {
//         return askedNumber;
//     } else {
//         askForNumber();
//     }
// }
//
// function askForDigit() {
//     let askedDigit = prompt('Enter Math digit');
//     if (askedDigit === '+' || askedDigit === '-' || askedDigit === '*' || askedDigit === '/' || askedDigit === '%' || askedDigit === '^') {
//         return askedDigit;
//     } else {
//         askForDigit();
//     }
// }
//
// function doMath(x, znak, y) {
//     switch (znak) {
//         case '+': {
//             return x + y;
//         }
//         case '-': {
//             return x - y;
//         }
//         case '*': {
//             return x * y;
//         }
//         case '/': {
//             return x / y;
//         }
//         case '%': {
//             return x % y;
//         }
//         case '^': {
//             return Math.pow(x, y);
//         }
//     }
// }
//
// let firstNumber = askForNumber();
// let secondNumber = askForNumber();
// let digit = askForDigit();
// alert(doMath(firstNumber, digit, secondNumber));
//
// console.log(firstNumber, ' @firstNumber');
// console.log(secondNumber, ' @secondNumber');
// console.log(digit, ' @digit');
//
//
// //3.Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
// function arrAdd() {
//     let arr = [];
//     let arrAmount1 = +prompt('Enter the number of arrays in the first array', '0');
//
//     for (let i = 0; i < arrAmount1; i++) {
//         arr.push([]);
//
//         let arrAmount2 = prompt('Enter the number of elements', '0');
//
//         for (let j = 0; j < arrAmount2; j++) {
//             let elem = prompt('Enter your data that you want to enter', '0');
//             arr[i].push(elem);
//         }
//     }
//     console.log(arr);
// }
//
// let functionResult = arrAdd();
//
// //4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
// const initialString = prompt('Give your string');
// const symbolsArr = [];
//
// function askForSymbols() {
//     const symbol = prompt('Give you symbol');
//     if (symbol !== null) {
//         symbolsArr.push(symbol);
//         askForSymbols();
//     }
// }
//
// askForSymbols();
//
// function removeSymbolsFromString(string, symbolsArr) {
//     let initialStringArr = string.split('');
//     symbolsArr.forEach(symbol => {
//         initialStringArr = initialStringArr.filter(el => el !== symbol);
//     });
//     return initialStringArr.join('');
// }
//
// console.log(initialString, '@initialString');
// console.log(symbolsArr, '@symbolsArr');
// console.log(removeSymbolsFromString(initialString, symbolsArr));