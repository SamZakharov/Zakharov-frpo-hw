const action = prompt('What do you want to do?');
const firstNumber = Number(prompt('Enter second number'));
const secondNumber = Number(prompt('Enter second number'));
const additionResult = Number(firstNumber + secondNumber);
const subtractionResult = Number(firstNumber - secondNumber);
const multiplicationResult = Number(firstNumber * secondNumber);
const divisionResult = Number(firstNumber / secondNumber);

switch (action) {
    case 'add':
        alert(firstNumber + ' + ' + secondNumber + ' = ' + additionResult);
        break;
    case 'sub':
        alert(firstNumber + ' - ' + secondNumber + ' = ' + subtractionResult);
        break;
    case 'mult':
        alert(firstNumber + ' * ' + secondNumber + ' = ' + multiplicationResult);
        break;
    case 'div':
        alert(firstNumber + ' / ' + secondNumber + ' = ' + divisionResult);
        break;
    default:
        alert('Please put correct action');
        break;
}
