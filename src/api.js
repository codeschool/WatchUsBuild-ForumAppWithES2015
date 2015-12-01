import { BASE_URI } from "./constants";

let API = { fetch };

function fetch(path){
  let url = `${BASE_URI}/${path}`
  let request = new XMLHttpRequest();

  return new Promise( (resolve, reject) => {

    request.open('GET', url, true);

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        resolve(JSON.parse(request.response));
      }
    };

    request.onerror = () => {
      reject(new Error("Error fetching posts"));
    }

    request.send();
  });
}

export default API;
