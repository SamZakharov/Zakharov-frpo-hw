let visibleContainerText = document.querySelector('#visible-container-text');
let ghostContainer = document.createElement('div');
let ghostContainerText = document.createElement('h4');
let mainContainer = document.querySelector('#main-container');

function addGhostContainer() {
    mainContainer.appendChild(ghostContainer);
    ghostContainer.appendChild(ghostContainerText);
    ghostContainerText.classList.add('text');
    ghostContainerText.textContent = 'This is a ghost container';

}

visibleContainerText.addEventListener('mouseover', addGhostContainer);
function removeGhostContainer() {
    mainContainer.removeChild(ghostContainer);
}

visibleContainerText.addEventListener('mouseout', removeGhostContainer);