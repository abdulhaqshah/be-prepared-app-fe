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
      course: result.data,
      status: result.status
    });
  }).catch(error => {
    console.log(error);
  });
};

export const getTutorialsByCourseId = data => dispatch => {
  API.getTutorialByCourseId(data, result => {
    dispatch({
      type: types.GET_TUTORIAL_DATA,
      tutorials: result.data,
      status: result.status
    });
  }).catch(error => {
    console.log(error);
  });
};

export const getQuizesByCourseId = data => dispatch => {
  API.getQuizByCourseId(data, result => {
    dispatch({
      type: types.GET_QUIZ_DATA,
      quizes: result.data,
      status: result.status
    });
  }).catch(error => {
    console.log(error);
  });
};
