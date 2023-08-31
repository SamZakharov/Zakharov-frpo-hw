function removeElement(array, item) {
    const neededElementIndex = array.indexOf(item);
    if (neededElementIndex === -1) {
        return;
    }
    array.splice(neededElementIndex, 1);
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 1);
console.log(array);