const input = document.querySelector('#input');

const buttonSubmit = document.querySelector('#buttonSubmit');
buttonSubmit.addEventListener('click', getPostById);

const postWrapper = document.querySelector('.post-wrapper');
const postsUrl = 'https://jsonplaceholder.typicode.com/posts/';

const getCommentsButton = document.createElement('button');
getCommentsButton.innerText = 'Get comments';
getCommentsButton.addEventListener('click', getCommentsToPost);

const commentsList = document.createElement('ul');

async function getPostById() {
    postWrapper.innerHTML = '';
    let id = input.value;

    try {
        const request = await fetch(postsUrl + id);
        const result = await request.json();

        if (result) {
            const body = document.createElement('p');
            body.innerText = 'Body: ' + result.body;
            const resultId = document.createElement('p');
            resultId.innerText = 'Post Id: ' + result.id;
            const title = document.createElement('p');
            title.innerText = 'Title: ' + result.title;
            const userId = document.createElement('p');
            userId.innerText = 'User Id: ' + result.userId;


            postWrapper.appendChild(body);
            postWrapper.appendChild(resultId);
            postWrapper.appendChild(title);
            postWrapper.appendChild(userId);
            postWrapper.appendChild(getCommentsButton);
        }
    } catch (err) {
        console.log(err);
    }
}

async function getCommentsToPost() {
    let id = input.value;

    const commentUrl = postsUrl + id + '/comments';

    try {
        const getComment = await fetch(commentUrl);
        const getCommentResult = await getComment.json();

        if (getCommentResult) {
            getCommentResult.forEach((item) => {
                const commentsListItem = document.createElement('li');
                commentsListItem.innerText = 'Email: ' + item.email + '\n' + ' Text: ' + item.body;

                commentsList.appendChild(commentsListItem);
            });
            postWrapper.appendChild(commentsList);
        }

    } catch (err) {
        console.log(err);
    }
}
