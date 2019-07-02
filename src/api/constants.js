export const API_HOST = "http://localhost:8000";
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
export const USER_ABOUT_INFO = uuid => {
  return `/user/${uuid}/update/about`;
};
export const TUTORIAL_DATA = '/tutorial/new'


