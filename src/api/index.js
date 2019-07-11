import { USER_REGISTER_URL, USER_LOGIN_URL, METHODS ,UPDATE_DATA, USER_ABOUT_INFO, GET_COURSES, GET_TUTORIALS, GET_QUIZZES, TUTORIAL_DATA} from "./constants";
import GlobalAPISvc from "./globalApi";
import * as auth from "../services/Session";
const data = JSON.parse(auth.getItem("data"));
const userId = data.uuid;

const userRegister = (data, resolve, reject) => {
  return GlobalAPISvc(USER_REGISTER_URL, METHODS.POST, data)
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
const tutorialData = (data, resolve, reject) => {
  return GlobalAPISvc(TUTORIAL_DATA, METHODS.POST, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const getQuizzes = (resolve, reject) => {
  return GlobalAPISvc(GET_QUIZZES, METHODS.GET)
    .then(res => resolve(res))
    .catch(err => reject(err));
};
const getCourses = (resolve, reject) => {
  return GlobalAPISvc(GET_COURSES, METHODS.GET)
    .then(res => resolve(res))
    .catch(err => reject(err));
};

const userAboutInfo = (data, resolve, reject) => {
  return GlobalAPISvc(USER_ABOUT_INFO(userId), METHODS.PATCH, data)
    .then(res => resolve(res))
    .catch(err => reject(err));
};
export default {
  userRegister,
  userLogin,
  updateData,
  getCourses,
  getTutorials,
  getQuizzes,
  userAboutInfo,
  tutorialData
};
