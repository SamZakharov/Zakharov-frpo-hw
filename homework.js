//ДЗ 29. Складніші цикли
// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
// const exchangeRate = 27;
// for (let dollars = 10; dollars <= 100; dollars += 10) {
//     const costInHryvnia = dollars * exchangeRate;
//     console.log(`${dollars} доллар(oв) = ${costInHryvnia} гривен`);
// }

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
// let N = prompt('Введите целое число: ');
// N = parseInt(N);
//
// if (Number.isInteger(N) && N > 0) {
//     for (let i = 1; i <= 100; i++) {
//         const square = i * i;
//         if (square <= N) {
//             console.log(i);
//         } else {
//             break;
//         }
//     }
// } else {
//     console.log('Пожалуйста, введите положительное целое число.');
// }

//Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
// let num = prompt('Введите целое число:');
// num = parseInt(num);
//
// if (Number.isInteger(num) && num > 1) {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(`${num} - простое число`);
//     } else {
//         console.log(`${num} - не простое число`);
//     }
// } else {
//     console.log('Пожалуйста, введите положительное целое число больше 1.');
// }


// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
// let number = prompt('Введите целое число:');
// number = parseInt(number);
//
// if (Number.isInteger(number) && number > 0) {
//     let power = 1;
//     let result = 3;
//     while (result < number) {
//         result = Math.pow(3, power);
//         power++;
//     }
//     if (result === number) {
//         console.log(`${number} можно получить путем возведения 3 в степень ${power - 1}`);
//     } else {
//         console.log(`${number} нельзя получить путем возведения 3 в целую степень`);
//     }
// } else {
//     console.log('Пожалуйста, введите положительное целое число.');
// }