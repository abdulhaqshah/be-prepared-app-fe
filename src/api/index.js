import { USER_URL, METHODS } from "./constants";
import GlobalAPISvc from "./globalApi";

const postUserData = (data, resolve, reject) => {
    return GlobalAPISvc(USER_URL, METHODS.POST, data)
    .then(res=>resolve(res))
    .catch(err=> reject(err));
};

export default postUserData;
