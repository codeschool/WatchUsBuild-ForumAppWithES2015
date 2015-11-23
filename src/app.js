import Post from "./post";

let ui = {
  renderPosts(posts){
    console.log( posts );
  }
};

Post.findAll().then(ui.renderPosts);

