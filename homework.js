// 22. Середнє значення
const arr = [];

for (let i = 0; i < 3; ++i) {
    let input = +prompt("Введите " + (i + 1) + "-е число ");
    console.log(isNaN(input));

    if (isNaN(input))
        break;

    arr.push(input);

}

let sumWithInitial = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let average = sumWithInitial / arr.length;
alert("Сумма: " + sumWithInitial + " " + "Среднеее арифметическое: " + average);
