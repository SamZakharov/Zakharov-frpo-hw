const imagesArr = ['./images/7.jpg', './images/8.jpg', './images/9.jpg'];
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const image = document.getElementsByTagName('img')[0];

function getImageIndex() {
    const currentImage = document.getElementsByTagName('img')[0];
    return Number(currentImage.id);
}

function checkButtonsEnable(imageIndex) {
    prevButton.disabled = imageIndex === 0;
    nextButton.disabled = imageIndex === imagesArr.indexOf(imagesArr[imagesArr.length - 1]);
}

function changeImage(index) {
    image.src = imagesArr[index];
    image.id = index;
}

image.src = imagesArr[1];
image.id = '1';
prevButton.addEventListener('click', () => {
    changeImage(getImageIndex() - 1);
    checkButtonsEnable(getImageIndex());
});
nextButton.addEventListener('click', () => {
    changeImage(getImageIndex() + 1);
    checkButtonsEnable(getImageIndex());
});