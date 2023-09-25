const smileys = [
    {

        smile: "😆",
        voteCount: 0,
    },
    {

        smile: "😅",
        voteCount: 0,
    },
    {

        smile: "😃",
        voteCount: 0,
    },
    {

        smile: "😈",
        voteCount: 0,
    },
    {

        smile: "😉",
        voteCount: 0,
    },
    {

        smile: "😉",
        voteCount: 0,
    },
];


let smileContainer = document.querySelector('#smile-container');
let voteContainer = document.querySelector('#vote-container');
let deleteSmileButton = document.querySelector('#delete-container');
let mainContainer = document.querySelector('#main-container');


function updateVotes() {
    voteContainer.innerHTML = "";


    smileys.forEach((item) => {
        let voteElement = document.createElement('div');
        voteElement.classList.add('vote-score');
        voteElement.textContent = item.voteCount;

        voteContainer.appendChild(voteElement);
    });
}

function showSmiles() {
    smileContainer.innerHTML = '';

    smileys.forEach((item, index) => {
        let smileElement = document.createElement('div');
        smileElement.textContent = item.smile;
        smileElement.classList.add('smileElement');

        smileElement.addEventListener('click', () => {
            smileys[index].voteCount++;
            updateVotes();
        });

        smileContainer.appendChild(smileElement);
    });
}

function updateSmile() {
    deleteSmileButton.innerHTML = '';


    smileys.forEach((item, index) => {
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteBtn');
        deleteButton.innerText = 'Delete smile';

        deleteButton.addEventListener('click', () => {
            smileys.splice(index, 1);
            console.log(smileys);
            showSmiles();
            updateVotes();
            updateSmile();

        });

        deleteSmileButton.appendChild(deleteButton);
    });
}

function addSmile() {
    let buttonAddSmile = document.createElement('button');

    buttonAddSmile.classList.add('buttonAddSmile');
    buttonAddSmile.innerText = 'Add';

    buttonAddSmile.addEventListener('click', () => {

        let userSmile = prompt('Add your smile: ');
        smileys.push({
            smile: userSmile,
            voteCount: 0
        });


        showSmiles();
        updateVotes();
        updateSmile();
    });

    mainContainer.appendChild(buttonAddSmile);
}

//Initialization
showSmiles();
updateVotes();
updateSmile();
addSmile();
