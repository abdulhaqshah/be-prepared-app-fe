import { API_HOST } from "./constants";
import * as auth from "../services/Session";

const token = auth.getItem("token");
const uuid = auth.getItem("uuid");
const GlobalAPISvc = (endPoint, method, data) => {
  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}${endPoint}`, {
      method: method,
      body: data.formData,
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        "x-authentication": token,
        uuid: uuid,
        "type": "formData"
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
