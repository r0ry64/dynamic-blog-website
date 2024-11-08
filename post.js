document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const postData = JSON.parse(localStorage.getItem(postId));

    if (postData) {
        const postTitle = document.getElementById('postTitle');
        const postContent = document.getElementById('postContent');
        const postImage = document.getElementById('postImage');
        const editButton = document.getElementById('editButton');
        
        postTitle.textContent = postData.title;
        postContent.textContent = postData.content;
        
        if (postData.image) {
            postImage.src = postData.image;
            postImage.style.display = 'block';
        }

        editButton.addEventListener('click', () => {
            document.getElementById('editForm').style.display = 'block';
            document.getElementById('editTitle').value = postData.title;
            document.getElementById('editContent').value = postData.content;
            document.getElementById('editImage').value = postData.image || '';
        });

        const editPostForm = document.getElementById('editPostForm');
        editPostForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const newTitle = document.getElementById('editTitle').value.trim();
            const newContent = document.getElementById('editContent').value.trim();
            const newImage = document.getElementById('editImage').value.trim();

            if (!newTitle || !newContent) {
                alert('Title and content are required!!');
                return;
            }

            postData.title = newTitle;
            postData.content = newContent;
            postData.image = newImage || null;

            localStorage.setItem(postId, JSON.stringify(postData));

            postTitle.textContent = newTitle;
            postContent.textContent = newContent;
            if (newImage) {
                postImage.src = newImage;
                postImage.style.display = 'block';
            }
            document.getElementById('editForm').style.display = 'none';
        });
    } else {
        document.querySelector('.container').innerHTML = "<p>Post not found :(</p>";
    }

    deletePostBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to delete this post?')) {
            localStorage.removeItem(postId);
            alert('Post deleted successfully.');
            window.location.href = 'index.html';
        }
    });

});