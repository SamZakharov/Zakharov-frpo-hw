function makeSum() {
    let sum = 0;

    function addNumb(number) {
        sum += number;
        return sum;
    }

    return addNumb;
}

let sum = makeSum();

let iterationCount = +prompt('How much iteration do you want?', '0');

while (iterationCount !== 0) {

    alert(sum(+prompt('Put your number', '0')));

    iterationCount--;

}