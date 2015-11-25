import Post from "./post";

let ui = {
  renderPosts(posts){
    console.log( `Posts: ${ JSON.stringify(posts, null, 2) } `);
  }
};

Post.findAll().then(ui.renderPosts);
