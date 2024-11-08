document.addEventListener("DOMContentLoaded", () => {
    const postForm = document.getElementById('postForm');
    const errorMessage = document.getElementById('errorMessage');

    postForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value.trim();
        const content = document.getElementById('content').value.trim();
        const image = document.getElementById('image').value.trim();

        if (!title || !content) {
            errorMessage.textContent = 'Both title and content are required!';
            return;
        }

        const postId = 'blogPost_' + Date.now();
        const postData = {
            title: title,
            content: content,
            image: image || null
        };

        localStorage.setItem(postId, JSON.stringify(postData));
        window.location.href = 'index.html';
    });
});