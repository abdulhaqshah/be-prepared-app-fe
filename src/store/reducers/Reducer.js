import { combineReducers } from "redux";
import * as types from "../actions/ActionTypes";

const initialState = {
  user: {},
  course: "",
  tutorials: "",
  quizes: "",
  tutorialById: "",
  quizById: ""
};

const userData = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === types.GET_USER_DATA) {
    return {
      ...state,
      user: action.user,
      status: action.status,
      message: action.message
    };
  }
  return newState;
};
const courseData = (state = initialState, action) => {
  debugger;

  const newState = { ...state };
  if (action.type === types.GET_COURSE_DATA) {
    return {
      ...state,
      course: action.course,
      status: action.status
    };
  }
  return newState;
};

const tutorialData = (state = initialState, action) => {
  debugger;
  const newState = { ...state };
  if (action.type === types.GET_TUTORIAL_DATA) {
    return {
      ...state,
      tutorials: action.tutorials
    };
  }
  return newState;
};

const quizData = (state = initialState, action) => {
  debugger;
  const newState = { ...state };
  if (action.type === types.GET_QUIZ_DATA) {
    return {
      ...state,
      quizes: action.quizes
    };
  }
  return newState;
};

const getTutorialDataById = (state = initialState, action) => {
  debugger;
  const newState = { ...state };
  if (action.type === types.GET_TUTORIAL_BY_ID) {
    return {
      ...state,
      tutorialById: action.tutorialById
    };
  }
  return newState;
};

const getQuizDataById = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === types.GET_QUIZ_BY_ID) {
    return {
      ...state,
      quizById: action.quizById
    };
  }
  return newState;
};

export default combineReducers({
  userData,
  courseData,
  tutorialData,
  quizData,
  getTutorialDataById,
  getQuizDataById
});
