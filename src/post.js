import API from "./api";

let Post = { findAll };

function findAll(){
  return API.fetch("posts");
}

export default Post;
