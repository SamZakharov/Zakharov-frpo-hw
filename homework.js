function generateKey(count, characters) {
    let generatedString = '';
    for (let i = 0; i < count; i++) {
        let randomNumb = Math.floor(Math.random() * characters.length);
        generatedString += characters[randomNumb];
    }
    return generatedString;
}
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const special = '!@#$%^&*()_+=-';
const characters = upperCase + lowerCase + numbers + special;
const key = generateKey(16, characters);
console.log(key);