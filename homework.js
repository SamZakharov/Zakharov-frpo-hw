// ДЗ 27. Таблиця
// let table = document.createElement("table");
//
// for (let i = 1; i <= 10; i++) {
//     let row = document.createElement("tr");
//
//     for (let j = 1; j <= 10; j++) {
//         let cell = document.createElement("td");
//         let cellText = document.createTextNode(((i - 1) * 10 + j).toString());
//         cell.appendChild(cellText);
//         row.appendChild(cell);
//
//         table.appendChild(row);
//     }
// }
//
// document.body.appendChild(table);



// ДЗ 28. generateList
let data = [1, 2, 3, [3.1, 3.2, 3.3], 4];
let listContainer = generateList(data);
let wrapper = document.createElement('div');
wrapper.classList.add('list-wrapper');

function generateList(array) {
    let result = document.createElement('ul');
    result.classList.add('style-list');

    array.forEach(function (item) {
        let listItem = document.createElement('li');
        listItem.classList.add('style-list-item');

        if (Array.isArray(item)) {
            listItem.appendChild(generateList(item));
        } else {
            listItem.appendChild(document.createTextNode(item));
        }

        result.appendChild(listItem);
    });

    return result;
}


wrapper.appendChild(listContainer);

document.body.appendChild(wrapper);