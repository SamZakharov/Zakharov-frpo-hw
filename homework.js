function pow (number, degree) {
    if(degree === 1){
        return number;
    } else {
        return number * pow(number, degree - 1);
    }
}
let result = pow(5,3);
console.log(result);