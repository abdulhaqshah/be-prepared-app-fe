import { USER_URL, USER_LOGIN_URL, METHODS ,UPDATE_DATA, USER_ABOUT_INFO, GET_COURSES, GET_TUTORIALS, GET_QUIZZES} from "./constants";
import GlobalAPISvc from "./globalApi";
import * as auth from "../services/Session";
const uuid = auth.getItem("uuid");

const postUserData = (data, resolve, reject) => {
  return GlobalAPISvc(USER_URL, METHODS.POST, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};
const userLogin = (data, resolve, reject) => {
  return GlobalAPISvc(USER_LOGIN_URL, METHODS.POST, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};
const updateData = (data, resolve, reject) => {
  return GlobalAPISvc(UPDATE_DATA, METHODS.PATCH, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const getCourses = (resolve, reject) => {
  return GlobalAPISvc(GET_COURSES, METHODS.GET)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const getTutorials = (resolve, reject) => {
  return GlobalAPISvc(GET_TUTORIALS, METHODS.GET)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const getQuizzes = (resolve, reject) => {
  return GlobalAPISvc(GET_QUIZZES, METHODS.GET)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const userAboutInfo = (data, resolve, reject) => {
  return GlobalAPISvc(USER_ABOUT_INFO(uuid), METHODS.PATCH, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};
export default {
  postUserData,
  userLogin,
  updateData,
  getCourses,
  getTutorials,
  getQuizzes,
  userAboutInfo,
};
