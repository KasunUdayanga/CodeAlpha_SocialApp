async function createPost() {
    const content = document.getElementById('postContent').value;
    if (!content) return;

    const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
    });

    if (response.ok) {
        document.getElementById('postContent').value = '';
        loadPosts();
    } else {
        alert('Failed to create post');
    }
}

async function loadPosts() {
    const response = await fetch('/api/posts');
    const posts = await response.json();

    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.textContent = post.content;
        postsContainer.appendChild(postElement);
    });
}

document.addEventListener('DOMContentLoaded', loadPosts);
