// DOM Selection
const addblogBtnEl = document.querySelector('#addblog');
const createblogBtnEl = document.querySelector('#create-blog');
const blogTitleEl = document.querySelector('input[name="blog_title"]');
const blogContentEl = document.querySelector('textarea[name="blog_content"]');


// event listener for add blog button
addblogBtnEl.addEventListener('click', (event) => {
    event.preventDefault();
    document.location.replace('/dashboard/new');

});

// event listener for create post button
createblogBtnEl.addEventListener('click', async (event) => {
    event.preventDefault();

    const blog_title = blogTitleEl.value.trim();
    const blog_contents = blogContentEl.value.trim();
    try {
        const response = await fetch(`/api/blogs`, {
            method: 'POST',
            body: JSON.stringify({
                blog_title,
                blog_contents
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

