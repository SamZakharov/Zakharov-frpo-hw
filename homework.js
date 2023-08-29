let arrLenght = +prompt('Put your lenght', '0');

let arr = [];
let deletedItemsArr = [];

for(let i = 0; i < arrLenght; i++) {
    let number = +prompt('Put your item', '0');
    arr.push(number);
}
alert('This is your initials array: ' + arr);

arr.sort( ( a , b ) => {
    if (a > b){
        return 1;
    } else if(a < b){
        return -1;
    }
    return 0;
});

alert('This is your sorted array: ' + arr);

deletedItemsArr.push(arr[1], arr[2], arr[3]);
arr.splice(1, 3);

alert('This is your deleted items: ' + deletedItemsArr);
alert('This is your array after deletion' + arr);