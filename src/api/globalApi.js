import { API_HOST } from "./constants";
import * as auth from "../services/Session";

const token = auth.getItem("token");
const data = JSON.parse(auth.getItem("data"));
const userId = data.uuid;

const GlobalAPISvc = (endPoint, method, data) => {
  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}${endPoint}`, {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "x-authentication": token,
        userId: userId
      }
    })
      .then(res => {
        return res.json();
      })
      .then(json => {
        resolve(json);
      })
      .catch(error => {
        reject(error);
      });
  }).catch(error => {
    return error;
  });
};

export default GlobalAPISvc;
