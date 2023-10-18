const showOrders = document.querySelector('#myOrders');
const categoriesList = document.querySelector('.categories ul');
const cartWrapper = document.querySelector('.cart-container');
cartWrapper.classList.add('hide');
const cartTable = document.querySelector('.cart-container table');
const productsList = document.querySelector('.products ul');
const productsWrapper = document.querySelector('.products');
productsWrapper.classList.add('show');
const categoryNameBlock = document.getElementById('categoryNameBlock');
const contactFormDialog = document.querySelector('#contactFormDialog');
const infoAboutOrder = document.querySelector('#infoAboutOrder');

class Store {
    constructor(storage) {
        this.storage = storage;
    }
}

class ItemsCategory {
    constructor(id, name, products) {
        this.id = id;
        this.name = name;
        this.products = products;
    }
}

class ShopItem {
    constructor(id, name, price, imgSrc, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imgSrc = imgSrc;
        this.quantity = quantity;
    }
}

class Cart {
    constructor() {
        this.cartItems = localStorage.getItem('myOrders') ? JSON.parse(localStorage.getItem('myOrders')) : [];
    }

    addItem(item) {
        if (this.checkIfItemInCart(item)) {
            this.cartItems.find(cartItem => cartItem.id === item.id).quantity++;
            localStorage.setItem('myOrders', JSON.stringify(this.cartItems));
        } else {
            item.quantity++;
            this.cartItems.push(item);
            localStorage.setItem('myOrders', JSON.stringify(this.cartItems));
        }
    }

    changeItemQuantity(item, quantity) {
        if (+quantity !== 0) {
            this.cartItems.find(cartItem => cartItem.id === item.id).quantity = +quantity;
            localStorage.setItem('myOrders', JSON.stringify(this.cartItems));
        } else {
            this.removeItemFromCart(item);
            updateMyProductList();
        }
    }

    checkIfItemInCart(item) {
        return this.cartItems.find(cartItem => cartItem.id === item.id) !== undefined;
    }

    removeItemFromCart(item) {
        this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
        localStorage.setItem('myOrders', JSON.stringify(this.cartItems));
    }
}

class OrderForm {
    constructor() {
    }

    createInputElement(type, placeholder) {

        const input = document.createElement('input');
        input.setAttribute("required", "");
        input.required = true;
        input.type = type;
        input.placeholder = placeholder;
        return input;
    }

    setupForm() {
        const postOffices = ['Нова Пошта №1', 'Нова Пошта №2', 'Нова Пошта №3', 'Нова Пошта №4', 'Нова Пошта №5'];

        const form = document.createElement('form');

        const nameInput = this.createInputElement('text', 'ФИО покупателя');
        nameInput.addEventListener('input', function () {
            if (!/^[a-zA-Zа-яА-Я\s]*$/.test(this.value)) {
                alert(' ФИО покупателя должно содержать только буквы и пробелы.');
                this.value = '';
            }
        });
        const cityInput = this.createInputElement('text', 'Город');
        cityInput.addEventListener('input', function () {
            if (!/^[a-zA-Zа-яА-Я\s]*$/.test(this.value)) {
                alert('Название города должно содержать только буквы и пробелы.');
                this.value = '';
            }
        });

        const postOfficeInput = document.createElement('select');

        for (let i = 0; i < postOffices.length; i++) {
            let opt = document.createElement('option');
            opt.value = postOffices[i];
            opt.innerHTML = postOffices[i];
            postOfficeInput.appendChild(opt);
        }

        const paymentMethodInput = document.createElement('div');
        paymentMethodInput.classList.add('paymentMethodWrap');

        const paymentBeforeLabel = document.createElement('label');
        const paymentBefore = document.createElement('input');
        paymentBefore.type = 'radio';
        paymentBefore.name = 'paymentMethod';
        paymentBefore.value = 'Предоплата';
        paymentBeforeLabel.innerText = 'Предоплата';
        paymentBeforeLabel.appendChild(paymentBefore);
        paymentBeforeLabel.style.display = 'inline-block'; // Устанавливаем стиль inline-block

        const paymentAfterLabel = document.createElement('label');
        const paymentAfter = document.createElement('input');
        paymentAfter.type = 'radio';
        paymentAfter.name = 'paymentMethod';
        paymentAfter.value = 'Полная оплата';
        paymentAfterLabel.innerText = 'Полная оплата';
        paymentAfterLabel.appendChild(paymentAfter);
        paymentAfterLabel.style.display = 'inline-block';

        paymentMethodInput.appendChild(paymentBeforeLabel);
        paymentMethodInput.appendChild(paymentAfterLabel);

        const commentInput = this.createInputElement('text', 'Комментарий к заказу');

        const submitButton = this.createInputElement('submit', 'Submit');
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            if (!nameInput.value || !cityInput.value || !postOfficeInput.value || (!paymentBefore.checked && !paymentAfter.checked) || !commentInput.value) {
                alert('Пожалуйста, заполните все поля формы.');
                return;
            }

            const paymentMethod = paymentBefore.checked ? paymentBefore.value : paymentAfter.value;

            const orderData = {
                name: nameInput.value,
                city: cityInput.value,
                postOffice: postOfficeInput.value,
                paymentMethod: paymentMethod,
                comment: commentInput.value,
                products: cart.cartItems,
            };

            nameInput.value = '';
            cityInput.value = '';
            postOfficeInput.value = '';
            paymentMethodInput.value = '';
            commentInput.value = '';

            contactFormDialog.close(JSON.stringify(orderData));

            showInfoAboutOrderModal();
            alert('Ваш заказ принят!');
        });

        const cancelButton = document.createElement('button');
        cancelButton.innerText = 'Cancel';
        cancelButton.addEventListener('click', (event) => {
            event.preventDefault()
            contactFormDialog.close('');
        });

        form.appendChild(nameInput);
        form.appendChild(document.createElement('br'));
        form.appendChild(cityInput);
        form.appendChild(document.createElement('br'));
        form.appendChild(postOfficeInput);
        form.appendChild(document.createElement('br'));
        form.appendChild(paymentMethodInput);
        form.appendChild(document.createElement('br'));
        form.appendChild(commentInput);
        form.appendChild(document.createElement('br'));
        form.appendChild(submitButton);
        form.appendChild(cancelButton);
        form.classList.add('qweTest');

        contactFormDialog.appendChild(form);
    }
}

const narutoCategory = new ItemsCategory('anime-naruto', 'Statuette: Naruto', []);
const narutoItem1 = new ShopItem(23, 'Naruto Uzumaki', '1000$', 'images/naruto-uzumaki.jpg', 0);
const narutoItem2 = new ShopItem(11, 'Sasuke Uchiha', '1200$', 'images/sasuke-uchiha.jpg', 0);
const narutoItem3 = new ShopItem(13, 'Kakashi Hatake', '700$', 'images/kakashi-hatake.jpg', 0);
narutoCategory.products.push(narutoItem1, narutoItem2, narutoItem3);

const bleachCategory = new ItemsCategory('anime-bleach', 'Statuette: Bleach', []);
const bleachItem1 = new ShopItem(41, 'Kyoraku Shunsui', '1000$', 'images/kyoraku-shunsui.jpg', 0);
const bleachItem2 = new ShopItem(55, 'Kurosaki Ichigo', '1200$', 'images/kurosaki-ichigo.jpg', 0);
const bleachItem3 = new ShopItem(67, 'Renji Abarai', '700$', 'images/renji-abarai.jpg', 0);
bleachCategory.products.push(bleachItem1, bleachItem2, bleachItem3);

const onePieceCategory = new ItemsCategory('anime-one-piece', 'Statuette: One-Piece', []);
const onePieceItem1 = new ShopItem(78, 'Monkey D-Luffy', '1000$', 'images/monkey-d-luffy.jpg', 0);
const onePieceItem2 = new ShopItem(91, 'Roronoa Zoro', '1200$', 'images/roronoa-zoro.jpg', 0);
const onePieceItem3 = new ShopItem(43, 'Sanji', '700$', 'images/sanji.jpg', 0);
onePieceCategory.products.push(onePieceItem1, onePieceItem2, onePieceItem3);

const animeShop = new Store([]);
animeShop.storage.push(narutoCategory, bleachCategory, onePieceCategory);

const cart = new Cart([]);
const contactForm = new OrderForm();
contactForm.setupForm();

cartWrapper.querySelector('.cart-buy-button').addEventListener('click', () => {
    contactFormDialog.showModal();
});

function updateMyProductList() {
    productsList.innerHTML = '';
    cartWrapper.querySelectorAll('#item-tr').forEach(node => {
        node.remove();
    });
    if (cart.cartItems.length > 0) {
        cartWrapper.querySelector('.cart-info-wrapper').style.display = 'block';
        cartWrapper.querySelector('.no-orders-wrapper').style.display = 'none';
        updateTotalPrice();
        cart.cartItems.forEach((product) => {
            let itemTr = document.createElement('tr');
            itemTr.id = 'item-tr';

            let productNameTd = document.createElement('td');
            productNameTd.innerText = product.name;
            itemTr.appendChild(productNameTd);

            let productImgTd = document.createElement('td');
            let productImageTag = document.createElement('img');
            productImageTag.src = product.imgSrc;
            productImgTd.appendChild(productImageTag);
            itemTr.appendChild(productImgTd);

            let productQuantityTd = document.createElement('td');
            let quantityPicker = document.createElement('input');
            quantityPicker.type = 'number';
            quantityPicker.min = '0';
            quantityPicker.value = product.quantity;
            quantityPicker.addEventListener('change', (event) => {
                cart.changeItemQuantity(product, event.target.value);
                updateMyProductList();
            });
            productQuantityTd.appendChild(quantityPicker);
            itemTr.appendChild(productQuantityTd);

            let productPriceTd = document.createElement('td');
            productPriceTd.innerText = product.price;
            itemTr.appendChild(productPriceTd);

            let totaltPriceTd = document.createElement('td');
            totaltPriceTd.innerText = String(product.quantity * Number(product.price.split('$')[0])) + '$';
            itemTr.appendChild(totaltPriceTd);

            let deleteBtnTd = document.createElement('td');
            deleteBtnTd.innerText = '-';
            deleteBtnTd.style.cursor = 'pointer';
            deleteBtnTd.addEventListener('click', () => {
                let confirmResult = confirm('Вы точно хотите удалить?');
                if (confirmResult) {
                    cart.removeItemFromCart(product);
                    updateMyProductList();
                } else {
                    alert('Продолжите покупки');
                }
            });
            itemTr.appendChild(deleteBtnTd);

            cartTable.appendChild(itemTr);
        });
    } else {
        cartWrapper.querySelector('.cart-info-wrapper').style.display = 'none';
        cartWrapper.querySelector('.no-orders-wrapper').style.display = 'block';
        alert('В корзине нет товаров.');
    }
}

const totalWrapper = document.createElement('div');
totalWrapper.classList.add('total-wrapper');

const total = calculateTotalPrice(cart.cartItems);
totalWrapper.innerText = `Total: $${total}`;

const parentElement = document.querySelector('.cart-info-wrapper');
parentElement.insertBefore(totalWrapper, parentElement.querySelector('button.cart-buy-button'));

function updateTotalPrice() {
    let totalPrice = document.querySelector('.total-wrapper');
    if (totalPrice) {
        totalPrice.innerText = `Total: $${calculateTotalPrice(cart.cartItems)}`;
    }
}

function calculateTotalPrice(cartItems) {
    let totalPrice = 0;
    cartItems.forEach(item => {
        const price = parseInt(item.price.replace('$', ''));
        totalPrice += price * item.quantity;
    });
    return totalPrice;
}

showOrders.addEventListener('click', () => {
    updateMyProductList()

    productsWrapper.classList.remove('show');
    productsWrapper.classList.add('hide');
    cartWrapper.classList.remove('hide');
    cartWrapper.classList.add('show');
});

animeShop.storage.forEach((category) => {
    let categoryItem = document.createElement('li');
    categoryItem.innerText = category.name;
    categoryItem.id = category.id;
    categoryItem.style.cursor = 'pointer';
    categoriesList.appendChild(categoryItem);

    categoryItem.addEventListener('click', () => {
        cartWrapper.classList.remove('show');
        cartWrapper.classList.add('hide');
        cartWrapper.querySelectorAll('#item-tr').forEach(node => {
            node.remove();
        });
        productsWrapper.classList.remove('hide');
        productsWrapper.classList.add('show');

        productsList.innerHTML = '';
        categoryNameBlock.innerText = category.name;

        categoryNameBlock.addEventListener('click', () => {
            productsList.innerHTML = '';
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
                    cart.addItem(product);
                    alert(`Товар ${product.name} добавлен в "Cart"!`);
                });
                productItem.appendChild(productName);
                productItem.appendChild(productPrice);
                productItem.appendChild(productImg);
                productItem.appendChild(buyButton);
            });
        });
    });
});

function showInfoAboutOrderModal() {
    const returnedDataFromForm = JSON.parse(contactFormDialog.returnValue);
    infoAboutOrder.showModal();
    const infoTable = document.createElement('table');

    const headerTR = document.createElement('tr');

    const headerNameTD = document.createElement('th');
    headerNameTD.innerText = 'Name';
    const headerPriceTD = document.createElement('th');
    headerPriceTD.innerText = 'Price';
    const headerQuantityTD = document.createElement('th');
    headerQuantityTD.innerText = 'Quantity';
    const headerTotalTD = document.createElement('th');
    headerTotalTD.innerText = 'Total';

    headerTR.appendChild(headerNameTD);
    headerTR.appendChild(headerPriceTD);
    headerTR.appendChild(headerQuantityTD);
    headerTR.appendChild(headerTotalTD);

    infoTable.appendChild(headerTR);

    const totalWrapper = document.createElement('div');
    totalWrapper.classList.add('total-wrapper');
    const total = calculateTotalPrice(returnedDataFromForm.products);
    totalWrapper.innerText = `Total: $${total}`;

    returnedDataFromForm.products.forEach(el => {
        const itemTR = document.createElement('tr');

        const nameTD = document.createElement('td');
        nameTD.innerText = el.name;
        const priceTD = document.createElement('td');
        priceTD.innerText = el.price;
        const quantityTD = document.createElement('td');
        quantityTD.innerText = el.quantity;
        const totalTD = document.createElement('td');
        totalTD.innerText = String(el.quantity * Number(el.price.split('$')[0])) + '$';

        itemTR.appendChild(nameTD);
        itemTR.appendChild(priceTD);
        itemTR.appendChild(quantityTD);
        itemTR.appendChild(totalTD);

        infoTable.appendChild(itemTR);
    });

    infoAboutOrder.appendChild(infoTable);

    const userInfoWrapper = document.createElement('div');
    userInfoWrapper.classList.add('user-info-wrapper');
    const name = document.createElement('p');
    const city = document.createElement('p');
    const postOffice = document.createElement('p');
    const paymentMethod = document.createElement('p');
    const comment = document.createElement('p');
    name.innerText = returnedDataFromForm.name;
    city.innerText = returnedDataFromForm.city;
    postOffice.innerText = returnedDataFromForm.postOffice;
    paymentMethod.innerText = returnedDataFromForm.paymentMethod;
    comment.innerText = returnedDataFromForm.comment;
    userInfoWrapper.appendChild(name);
    userInfoWrapper.appendChild(city);
    userInfoWrapper.appendChild(postOffice);
    userInfoWrapper.appendChild(paymentMethod);
    userInfoWrapper.appendChild(comment);

    infoAboutOrder.appendChild(userInfoWrapper);

    const closeButton = document.createElement('button');
    closeButton.innerText = 'OK';
    closeButton.addEventListener('click', () => {
        infoAboutOrder.close('');
        infoAboutOrder.innerHTML = '';

    });

    infoAboutOrder.appendChild(totalWrapper);
    infoAboutOrder.appendChild(closeButton);
}

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

