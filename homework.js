const categories = [
    {
        id: 'phones',
        name: 'Smartphones',
        products: [
            {
                id: 23,
                name: 'Phone 1',
                price: '1000$'
            },
            {
                id: 11,
                name: 'Phone 2',
                price: '1200$'
            },
            {
                id: 13,
                name: 'Phone 3',
                price: '700$'
            },
        ]
    },
    {
        id: 'tv',
        name: 'TV`s',
        products: [
            {
                id: 41,
                name: 'TV 1',
                price: '1000$'
            },
            {
                id: 55,
                name: 'TV 2',
                price: '1200$'
            },
            {
                id: 67,
                name: 'TV 3',
                price: '700$'
            },
        ]
    },
    {
        id: 'cars',
        name: 'Cars',
        products: [
            {
                id: 78,
                name: 'Car 1',
                price: '1000$'
            },
            {
                id: 91,
                name: 'Car 2',
                price: '1200$'
            },
            {
                id: 43,
                name: 'Car 3',
                price: '700$'
            },
        ]
    }
];

const categoriesList = document.querySelector('.categories ul');
const productsList = document.querySelector('.products ul');
const infoBlock = document.getElementById('information');

categories.forEach((category) => {
    let categoryItem = document.createElement('li');

    categoryItem.addEventListener('click', () => {
        productsList.innerHTML = '';

        category.products.forEach((product) => {
            let productItem = document.createElement('li');

            productItem.addEventListener('click', () => {
                infoBlock.innerHTML = '';

                let infoText = document.createElement('h3');
                infoText.innerText = 'Info about product';

                let buyButton = document.createElement('button');
                buyButton.innerText = 'Buy';
                buyButton.addEventListener('click', () => {
                    alert(`You\`ve bought ${product.name} with price ${product.price}`);
                    productsList.innerHTML = '';
                    infoBlock.innerHTML = '';
                });

                let productName = document.createElement('p');
                productName.innerText = product.name;
                let productPrice = document.createElement('p');
                productPrice.innerText = product.price;

                infoBlock.appendChild(infoText);
                infoBlock.appendChild(productName);
                infoBlock.appendChild(productPrice);
                infoBlock.appendChild(buyButton);
            });

            productItem.id = product.id;
            productItem.innerText = `Name: ${product.name}`;
            productsList.appendChild(productItem);
        });
    });

    categoryItem.innerText = category.name;
    categoryItem.id = category.id;
    categoriesList.appendChild(categoryItem);
});

function submitForm() {
    const form = document.getElementById('registrationForm');
    const userName = form.elements['userName'];
    const userSecondName = form.elements['userSecondName'];
    const birthDate = form.elements['birthDate'];
    const genders = document.getElementsByName('sex');
    const selectedGender = Array.from(genders).find(el => el.checked);
    const country = form.elements['country'];
    const adress = form.elements['adress'];
    const languages = document.getElementsByName('language');
    const selectedLanguages = Array.from(languages).filter(el => el.checked);

    const formWrapper = document.getElementById('formWrapper');
    formWrapper.style.display = 'none';
    const tableWrapper = document.getElementById('tableWrapper');
    tableWrapper.style.display = 'block';

    const table = document.getElementById('table');
    const tr = document.createElement('tr');

    const userNameTD = document.createElement('td');
    userNameTD.innerText = userName.value;

    const userSecondNameTD = document.createElement('td');
    userSecondNameTD.innerText = userSecondName.value;

    const birthDateTD = document.createElement('td');
    birthDateTD.innerText = birthDate.value;

    const genderTD = document.createElement('td');
    genderTD.innerText = selectedGender.value;

    const countryTD = document.createElement('td');
    countryTD.innerText = country.value;

    const adressTD = document.createElement('td');
    adressTD.innerText = adress.value;

    const languageTD = document.createElement('td');
    selectedLanguages.forEach((el, index, array) => {
        index === array.length - 1 ? languageTD.innerText += el.value : languageTD.innerText += el.value + ', ';
    })

    tr.appendChild(userNameTD);
    tr.appendChild(userSecondNameTD);
    tr.appendChild(birthDateTD);
    tr.appendChild(genderTD);
    tr.appendChild(countryTD);
    tr.appendChild(adressTD);
    tr.appendChild(languageTD);
    table.appendChild(tr);
}
