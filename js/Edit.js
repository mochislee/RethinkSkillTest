const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get('postId');

getPost(postId);


function getPost(postId) {
    var posts = sessionStorage.getItem("posts");

    if (posts === null) {
        return window.location.href = "viewposts.html";
    }

    var jsonPosts = JSON.parse(posts);

    var post = null;

    for(var i = 0; i < jsonPosts.length; i++) {
        if (jsonPosts[i]["id"] === postId) {
            post = jsonPosts[i];
            break;
        }
    }

    if (post === null) {
        return window.location.href = "viewposts.html";
    }

    var description = document.getElementById("description");
    description.setAttribute('value', post.description);

    var title = document.getElementById("title");
    title.setAttribute('value', post.title);

}

function editPost(){

    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;

    var posts = sessionStorage.getItem("posts");

    if (posts === null) {
        return window.location.href = "viewposts.html";
    }

    var jsonPosts = JSON.parse(posts);


    for(var i = 0; i < jsonPosts.length; i++) {
        if (jsonPosts[i]["id"] === postId) {
            jsonPosts[i]["title"] = title ;
            jsonPosts[i]["description"] = description ;
            break;
        }
    }

    sessionStorage.setItem('posts', JSON.stringify(jsonPosts));
    
    alert("Updated!")
    }



function deletePost(){
    let posts = JSON.parse(sessionStorage.getItem('posts')) || [];

    posts = posts.filter(function(item) {
        return item.id != postId; 
    });
    
    sessionStorage.setItem('posts', JSON.stringify(posts));
    
    alert("Deleted")
    window.location.href = "viewposts.html";

 }