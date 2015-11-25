import xssFilters from "xss-filters";

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
  let safeTitle = xssFilters.inHTMLData(title);
  let safeLastReply = xssFilters.inHTMLData(lastReply);

  return`<article class='post'>
      ${safeTitle}
    <h2 class='post-title'>
    </h2>
    <p class='post-meta'>
      last reply on ${safeLastReply}
    </p>
  </article>`.trim();
}

export default ui;
