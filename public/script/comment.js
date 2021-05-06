// DOM Selection
const addCommentBtnEl = document.querySelector('#create-comment');

// Event listener function
addCommentBtnEl.addEventListener('submit', async (event) => {
    event.preventDefault();
    const comment = document.querySelector('textarea[name="post_comment"]').value.trim();
    const post_id = addCommentBtnEl.name.value || novalue;
    const user_id = 'f7922fa0-b26a-4223-b1c5-172799866878';
    console.log(comment, post_id, user_id);
    try {
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment, user_id, post_id }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    catch (e) {
        console.log(e);
    };

    // document.location.reload();
});



