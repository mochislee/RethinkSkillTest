function editPost(postId) {
  window.location.href = `updatepost.html?postId=${postId}`;
}
function deletePost(postId) {
  window.location.href = `updatepost.html?postId=${postId}`;
}


function displayPosts() {
  var postsContainer = document.getElementById('view-post');

  let posts = JSON.parse(sessionStorage.getItem('posts')) || [];
  
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.description}</p>
      <p>Date: ${post.createdAt}</p>
      <button class="btn btn-primary" onclick="editPost('${post.id}')">Edit</button>
      <button class="btn btn-primary" onclick="deletePost('${post.id}')">Delete</button>
      <hr />
    `;
    postsContainer.appendChild(postElement);
  });
}




displayPosts();

