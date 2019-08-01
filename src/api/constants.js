let API = "";

if (process.env.NODE_ENV === "development") {
  API = "http://localhost:8000";
} else if (process.env.NODE_ENV === "production") {
  API = "https://be-prepared-app-bk.herokuapp.com";
}

export const API_HOST = API;
export const METHODS = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH"
};
export const USER_REGISTER_URL = "/user/register";
export const USER_LOGIN_URL = "/user/login";
export const TEST_DATA = "/tutorial/addLesson";
export const UPDATE_DATA = "/user/userUpdate";
export const GET_COURSES = "/course/allInActive";
export const GET_TUTORIALS = "/tutorial/allInActive";
export const GET_QUIZZES = "/quiz/allInActive";
export const TUTORIAL_DATA = "/tutorial/new";
export const COURSE_DATA = "/course/new";
export const QUIZ_DATA = "/quiz/new";
export const UPDATE_PASSWORD = "/user/updatePassword";
export const GET_COURSE_BY_ID = courseId => {
  return `/course/courseById/${courseId}`;
};
export const GET_TUTORIALS_BY_COURSE_ID = courseId => {
  return `/tutorial/course/${courseId}`;
};
export const GET_QUIZES_BY_COURSE_ID = courseId => {
  return `/quiz/course/${courseId}`;
};
export const GET_TUTORIAL_BY_ID = tutorialId => {
  return `/tutorial/tutorialById/${tutorialId}`;
};
export const GET_QUIZ_BY_ID = quizId => {
  return `/quiz/quizById/${quizId}`;
};
export const USER_ABOUT_INFO = uuid => {
  return `/user/${uuid}/update/about`;
};
export const TUTORIAL_UPDATE_CONTENT = tutorialId => {
  return `/tutorial/update/${tutorialId}`;
};
export const COURSE_UPDATE_DESCRIPTION = courseId => {
  return `/course/update/${courseId}`;
};
export const EMAIL_CONFIRMATION = email => {
  return `/user/emailExist/${email}`;
};
export const USER_BY_ID = uuid => {
  return `/user/userById/${uuid}`
}

