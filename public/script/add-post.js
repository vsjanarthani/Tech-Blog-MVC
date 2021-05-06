// DOM Selection
const addpostBtnEl = document.querySelector('#addpost');
const createpostBtnEl = document.querySelector('#create-post');
const postTitleEl = document.querySelector('input[name="post_title"]');
const postContentEl = document.querySelector('textarea[name="post_content"]');


// event listener for add post button
if (addpostBtnEl) {
addpostBtnEl.addEventListener('click', (event) => {
    event.preventDefault();
    document.location.replace('/dashboard/new');
});
}

// event listener for create post button
if (createpostBtnEl) {
createpostBtnEl.addEventListener('click', async (event) => {
    event.preventDefault();

    const post_title = postTitleEl.value.trim();
    const post_contents = postContentEl.value.trim();
    const user_id = 'f7922fa0-b26a-4223-b1c5-172799866878';
    try {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({
                post_title,
                post_contents,
                user_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
    catch (e) {
        console.log(e);
    }
});
}
