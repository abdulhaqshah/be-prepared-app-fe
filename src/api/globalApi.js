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
    .then(res => {
      return res.json()
    })
    .then(json => {
      resolve(json);
    }).catch((error) => {
      reject(error);
    });
  }).catch (error => {
    return error;
  })
};
// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.json());
//   }
//   return response.json();
// }

export default GlobalAPISvc;