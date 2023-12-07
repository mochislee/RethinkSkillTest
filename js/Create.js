function create(){
    var title = document.getElementById("createTitle").value;
    var description = document.getElementById("createDescription").value;
    const POSTID = new Date().getTime().toString();

    var posts = sessionStorage.getItem('posts');
    if (posts === null) {
        sessionStorage.setItem('posts', JSON.stringify([]));
      }
      
      const existingPosts = JSON.parse(sessionStorage.getItem('posts'));

      const newPost = {
        id: POSTID,
        title: title,
        description: description,
        createdAt: new Date()
      };
    
      existingPosts.push(newPost);
    
      sessionStorage.setItem('posts', JSON.stringify(existingPosts));

    alert('new post created!');

}


