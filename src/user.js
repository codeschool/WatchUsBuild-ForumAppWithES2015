import API from "./api";

let User = { findAllActive };

function findAllActive(){
  return API.fetch("activeUsers");
}

export default User;
