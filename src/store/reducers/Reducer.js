import { combineReducers } from "redux";
import * as types from "../actions/ActionTypes";
const initialState = {
  user: {},
  course: "",
  tutorials: "",
  quizes: "",
  tutorialById: "",
  quizById: "",
  pathname: "",
  status: "",
  message: "",
  index: 0,
  score: 0,
  attempted: 0
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
  } else if (action.type === types.LOGOUT) {
    return {
      ...state,
      user: {},
      status: null,
      message: null
    };
  } else if (action.type === types.INCREMENT_INDEX) {
    return newState.index++;
  } else if (action.type === types.DECREMENT_INDEX) {
    return newState.index--;
  } else if (action.type === types.CALCULATE_SCORE) {
    return newState.score++;
  } else if (action.type === types.ATTEMPTED_QUESTIONS) {
    return newState.attempted++;
  } else {
    return newState;
  }
};

const getDashboardData = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === types.GET_COURSE_DATA) {
    return {
      ...state,
      course: action.course,
      status: action.status
    };
  } else if (action.type === types.GET_TUTORIAL_DATA) {
    return {
      ...state,
      tutorials: action.tutorials
    };
  } else if (action.type === types.GET_QUIZ_DATA) {
    return {
      ...state,
      quizes: action.quizes
    };
  } else if (action.type === types.GET_TUTORIAL_BY_ID) {
    return {
      ...state,
      tutorialById: action.tutorialById
    };
  } else if (action.type === types.GET_QUIZ_BY_ID) {
    return {
      ...state,
      quizById: action.quizById
    };
  } else if (action.type === types.GET_PATHNAME) {
    return {
      ...state,
      pathname: action.pathname
    };
  } else {
    return newState;
  }
};

export default combineReducers({
  userData,
  getDashboardData
});
