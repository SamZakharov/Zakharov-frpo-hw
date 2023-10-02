const categories = [
    {
        id: 'naruto-anime',
        name: 'Statuette: Naruto',
        products: [
            {
                id: 23,
                name: 'Naruto Uzumaki',
                price: '1000$',
                imgSrc: 'images/naruto-uzumaki.jpg'

            },
            {
                id: 11,
                name: 'Sasuke Uchiha',
                price: '1200$',
                imgSrc: 'images/sasuke-uchiha.jpg'
            },
            {
                id: 13,
                name: 'Kakashi Hatake',
                price: '700$',
                imgSrc: 'images/kakashi-hatake.jpg'
            },
        ]
    },
    {
        id: 'anime-bleach',
        name: 'Statuette: Bleach',
        products: [
            {
                id: 41,
                name: 'Kyoraku Shunsui',
                price: '1000$',
                imgSrc: 'images/kyoraku-shunsui.jpg'
            },
            {
                id: 55,
                name: 'Kurosaki Ichigo',
                price: '1200$',
                imgSrc: 'images/kurosaki-ichigo.jpg'
            },
            {
                id: 67,
                name: 'Renji Abarai',
                price: '700$',
                imgSrc: 'images/renji-abarai.jpg'
            },
        ]
    },
    {
        id: 'anime-one-piece',
        name: 'Statuette: One-Piece',
        products: [
            {
                id: 78,
                name: 'Monkey D-Luffy',
                price: '1000$',
                imgSrc: 'images/monkey-d-luffy.jpg'
            },
            {
                id: 91,
                name: 'Roronoa Zoro',
                price: '1200$',
                imgSrc: 'images/roronoa-zoro.jpg'
            },
            {
                id: 43,
                name: 'Sanji',
                price: '700$',
                imgSrc: 'images/sanji.jpg'
            },
        ]
    }
];

const showOrders = document.querySelector('#myOrders');
const categoriesList = document.querySelector('.categories ul');
const productsList = document.querySelector('.products ul');
const infoBlock = document.getElementById('information');
const categoryNameBlock = document.getElementById('categoryNameBlock');


categories.forEach((category) => {
    let categoryItem = document.createElement('li');
    categoryItem.innerText = category.name;
    categoryItem.id = category.id;
    categoriesList.appendChild(categoryItem);

    categoryItem.addEventListener('click', () => {
        productsList.innerHTML = '';
        infoBlock.innerHTML = '';
        categoryNameBlock.innerText = category.name;

        categoryNameBlock.addEventListener('click', () => {
            productsList.innerHTML = '';
            infoBlock.innerHTML = '';
            categoryNameBlock.innerText = 'Categories:';
        });

        category.products.forEach((product) => {
            let productItem = document.createElement('li');

            productItem.id = product.id;
            productItem.innerText = `Name: ${product.name}`;

            productsList.appendChild(productItem);


            let productPhoto = document.createElement('img');

            productPhoto.src = product.imgSrc;
            productPhoto.classList.add('product-photo');
            productItem.appendChild(productPhoto);


            productItem.addEventListener('click', () => {

                productItem.innerHTML = '';

                let productName = document.createElement('div');
                productName.innerText = `Name: ${product.name}`;
                productName.classList.add('product-name');

                let productPrice = document.createElement('div');
                productPrice.innerText = `Price: ${product.price}`;
                productPrice.classList.add('product-price');

                let productImg = document.createElement('img');
                productImg.src = product.imgSrc;
                productImg.classList.add('product-photo');

                let buyButton = document.createElement('button');
                buyButton.classList.add('buy-button');
                buyButton.innerText = 'Buy';
                buyButton.addEventListener('click', () => {
                    let myOrders = localStorage.getItem('myOrders') ? JSON.parse(localStorage.getItem('myOrders')) : [];
                    myOrders.push(product);
                    localStorage.setItem('myOrders', JSON.stringify(myOrders));
                    console.log(myOrders);

                });

                productItem.appendChild(productName);
                productItem.appendChild(productPrice);
                productItem.appendChild(productImg);
                productItem.appendChild(buyButton);


            });

            showOrders.addEventListener('click', () => {
                let myOrders = localStorage.getItem('myOrders') ? JSON.parse(localStorage.getItem('myOrders')) : [];
                productsList.innerHTML = '';
                infoBlock.innerHTML = '';

                if (myOrders.length > 0) {
                    myOrders.forEach((product) => {
                        let productItem = document.createElement('li');
                        productItem.classList.add('orders-in-cart');


                        let productImage = document.createElement('img');
                        productImage.src = product.imgSrc;
                        productImage.alt = product.name;
                        productItem.appendChild(productImage);


                        let productInfo = document.createElement('div');
                        productInfo.innerText = `Name: ${product.name}, Price: ${product.price}`;
                        productItem.appendChild(productInfo);


                        let removeButton = document.createElement('button');
                        removeButton.innerText = 'Remove';
                        removeButton.addEventListener('click', () => {

                            myOrders = myOrders.filter((item) => item.id !== product.id);
                            localStorage.setItem('myOrders', JSON.stringify(myOrders));

                            showOrders.click();
                        });
                        productItem.appendChild(removeButton);

                        productsList.appendChild(productItem);
                    });
                } else {
                    showOrders.innerHTML = '';
                    alert('No orders yet.');
                }
            });
        });
    });
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

