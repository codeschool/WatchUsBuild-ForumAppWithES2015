import Post from "./post";

/*
let articleTemplate = `
<article class='post'>
  <h2 class='post-title'>
    ${postTitle}
  </h2>
  <p class='post-meta'>
    ${lastReply}
  </p>
</article>
`.trim();
*/

let ui = {
  renderPosts(posts){
    let target = document.querySelector(".container");

    let article = document.createElement("article");
    article.className = "post";

    let h2 = document.createElement("h2");
    h2.className = "post-title";
    let postTitle = document.createTextNode("I am a post title w00t");
    h2.appendChild(postTitle);

    let p = document.createElement("p");
    p.className = "post-meta";
    let lastReply = document.createTextNode("last reply on 1997-07-03");
    p.appendChild(lastReply);


    article.appendChild(h2);
    article.appendChild(p);

    target.appendChild(article);
  }
};

Post.findAll().then(ui.renderPosts);

