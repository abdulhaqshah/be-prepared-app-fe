import { API_HOST } from "./constants";

const GlobalAPISvc = (endPoint, method, data) => {
  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}${endPoint}`, {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(handleErrors)
    .then(json => {
      resolve(JSON.stringify(json));
    }).catch(function(error) {
      reject(error);
    });
  }).catch ( err => {
    return err;
  })
};
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.json());
  }
  return response.json();
}

export default GlobalAPISvc;