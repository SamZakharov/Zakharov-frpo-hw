let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let positiveElementsSumm = 0;
let positiveElementsCount = 0;
let negativeCount = 0;
let positiveNotRoundCount = 0;
let positiveRoundCount = 0;
let positiveRoundSumm = 0;
let positiveNotRoundSumm = 0;
let positiveMult = 1;
const maxArrayNumber = Math.max(...arr);
const minArrayNumber = Math.min(...arr);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {

        positiveElementsCount++;
        positiveElementsSumm += arr[i];
        positiveMult *= arr[i];

        if (arr[i] % 2 !== 0) {
            positiveNotRoundCount++;
            positiveNotRoundSumm += arr[i];
        } else {
            positiveRoundCount++;
            positiveRoundSumm += arr[i];
        }
    } else {
        negativeCount++;
    }

    if (arr[i] !== maxArrayNumber) {
        arr[i] = 0;
    }
}

console.log('Min element: ', minArrayNumber);
console.log('Max element: ', maxArrayNumber);
console.log('Summ of positive elements: ', positiveElementsSumm);
console.log('Count of positive elements: ', positiveElementsCount);
console.log('Number of negative elements: ', negativeCount);
console.log('Positive not round numbers count: ', positiveNotRoundCount);
console.log('Positive round numbers count: ', positiveRoundCount);
console.log('Positive round numbers summ: ', positiveRoundSumm);
console.log('Positive not round numbers summ: ', positiveNotRoundSumm);
console.log('Positive multiply: ', positiveMult);
console.log('Max element and another numbers are 0', arr);