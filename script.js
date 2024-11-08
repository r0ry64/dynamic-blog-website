document.addEventListener("DOMContentLoaded", function() {
    const postList = document.getElementById("postList");

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        
        if (key.startsWith('blogPost_')) {
            const postData = JSON.parse(localStorage.getItem(key));

            const listItem = document.createElement('li');
            const postLink = document.createElement('a');
            postLink.href = `post.html?id=${key}`;
            postLink.textContent = postData.title;

            listItem.appendChild(postLink);
            postList.appendChild(listItem);
        }
    }
});