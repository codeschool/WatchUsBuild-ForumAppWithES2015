let ui = {
  renderPosts(posts){
    let target = document.querySelector(".container");

    let postElements = posts.map( post => {
      return articleElement(post.title, post.lastReply);
    });

    target.innerHTML = postElements.join("");
  }
};


function articleElement(title, lastReply){
  return`<article class='post'>
    <h2 class='post-title'>
      ${title}
    </h2>
    <p class='post-meta'>
      last reply on ${lastReply}
    </p>
  </article>`.trim();
}

export default ui;
