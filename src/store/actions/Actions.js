import * as types from "../actions/ActionTypes";
import API from "../../api/index";

export const getUserData = data => dispatch => {
  API.userLogin(data, result => {
    dispatch({
      type: types.GET_USER_DATA,
      user: result.data,
      status: result.status,
      message: result.message
    });
  }).catch(error => {
    console.log(error);
  });
};

export const getCourseById = data => dispatch => {
  API.getCourseById(data, result => {
    dispatch({
      type: types.GET_COURSE_DATA,
      course: result.data
    });
  }).catch(error => {
    console.log(error);
  });
};

export const getTutorialsByCourseId = data => dispatch => {
  API.getTutorialByCourseId(data, result => {
    dispatch({
      type: types.GET_TUTORIAL_DATA,
      tutorials: result.data
    });
  }).catch(error => {
    console.log(error);
  });
};

export const getQuizesByCourseId = data => dispatch => {
  API.getQuizByCourseId(data, result => {
    dispatch({
      type: types.GET_QUIZ_DATA,
      quizes: result.data
    });
  }).catch(error => {
    console.log(error);
  });
};

export const getTutorialById = data => dispatch => {
  API.getTutorialById(data, result => {
    dispatch({
      type: types.GET_TUTORIAL_BY_ID,
      tutorialById: result.data
    });
  }).catch(error => {
    console.log(error);
  });
};

export const getQuizById = data => dispatch => {
  API.getQuizById(data, result => {
    dispatch({
      type: types.GET_QUIZ_BY_ID,
      quizById: result.data
    });
  }).catch(error => {
    console.log(error);
  });
};
export const getPathname = path => dispatch => {
  dispatch({
    type: types.GET_PATHNAME,
    pathname: path
  });
};

export const logout = () => dispatch => {
  dispatch({
    type: types.LOGOUT
  });
};

export const incrementIndex = index => dispatch => {
  dispatch({
    type: types.INCREMENT_INDEX,
    index: index + 1
  });
};
