import { USER_URL, METHODS } from "./constants";
import GlobalAPISvc from "./globalApi";

const postUserData = data => {
  GlobalAPISvc(USER_URL, METHODS.POST, data)
  .then(res => {
    debugger
  })
  .catch(res => {
    debugger
  });
};

export default postUserData;
