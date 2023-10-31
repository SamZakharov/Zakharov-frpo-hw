class SuperMath {
    check(obj) {
        const { X, Y, znak } = obj;
        const validOperators = ['+', '-', '/', '*', '%'];

        if (validOperators.includes(znak)) {
            const confirmMessage = `Вы хотите выполнить операцию ${X} ${znak} ${Y}? (да/нет)`;
            const userChoice = prompt(confirmMessage).toLowerCase();

            if (userChoice === 'да') {
                switch (znak) {
                    case '+':
                        alert(`${X} + ${Y} = ${X + Y}`);
                        break;
                    case '-':
                        alert(`${X} - ${Y} = ${X - Y}`);
                        break;
                    case '/':
                        alert(`${X} / ${Y} = ${X / Y}`);
                        break;
                    case '*':
                        alert(`${X} * ${Y} = ${X * Y}`);
                        break;
                    case '%':
                        alert(`${X} % ${Y} = ${X % Y}`);
                        break;
                }
            } else {
                this.input();
            }
        } else {
            alert('Некорректный оператор. Пожалуйста, используйте один из следующих операторов: +, -, /, *, %');
            this.input();
        }
    }

    input() {
        const X = parseFloat(prompt('Введите число X:'));
        const Y = parseFloat(prompt('Введите число Y:'));
        const znak = prompt('Введите оператор (+, -, /, *, %):');
        this.check({ X, Y, znak });
    }
}

const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: "/" };
p.check(obj);