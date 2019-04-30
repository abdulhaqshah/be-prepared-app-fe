import { API_HOST, USER_URL } from "./constants";
const USER_PATH = "http://" + API_HOST + USER_URL;

const postUserData = data => {
  fetch(USER_PATH, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      return res.json();
    })
    .then(json => {
      console.log("res json", json);
    });
};

export default postUserData;
