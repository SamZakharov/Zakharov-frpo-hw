const changeImg = () => {
    let rand = 1 + Math.random() * (9 - 1) + 1;
    rand = Math.floor(rand);
    document.querySelector('img').src = 'images/' + rand + '.jpg'
}
changeImg();

document.querySelector('button').addEventListener('click', changeImg);