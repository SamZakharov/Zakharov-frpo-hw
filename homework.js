const capitalUkraine = 'You live in the capital of Ukraine.\n';
const capitalUnitedStates = 'You live in the capital of United States.\n';
const capitalGreatBritain = 'You live in the capital of GreatBritain.\n';

const footballChampion = 'Wow! You want to be as cool as Maradonna?!\n';
const boxingChampion = 'Wow! You want to be as cool as Muhammed Ali?!\n';
const bassketballChampion = 'Wow! You want to be as cool as Jordan?!\n';

let resultMessage = '';

const userAge = prompt('How old are you?');
if (userAge !== null) {
    resultMessage += `You are ${userAge} years old.\n`;
} else {
    alert(`It's a shame that you didn't want to give us your age :(`);
}

const userCity = prompt('What city do you live in?');
if (userCity !== null) {
    const notCapital = `You live in the city: ${userCity}.\n`;
    switch (userCity) {
        case 'Kyiv':
            resultMessage += capitalUkraine;
            break;
        case 'London':
            resultMessage += capitalGreatBritain;
            break;
        case 'Washington':
            resultMessage += capitalUnitedStates;
            break;
        default:
            resultMessage += notCapital;
            break;
    }
} else {
    alert(`It's a shame that you didn't want to give us your city :(`)
}

const userSport = prompt('What is your favourite sport?');
if (userSport !== null) {
    const defaultSport = `You choose ${userSport} as your favorite sport. That's a nice!`;
    switch (userSport) {
        case 'Football':
            resultMessage += footballChampion;
            break;
        case 'Bassketball':
            resultMessage += bassketballChampion;
            break;
        case 'Boxing':
            resultMessage += boxingChampion;
            break;
        default:
            resultMessage += defaultSport;
            break;
    }
} else {
    alert(`It's a shame that you didn't want to give us your sport :(`)
}

if (resultMessage === '') {
    alert(`Sorry, I don't have information about you, try again please.`)
} else {
    alert(resultMessage);
}