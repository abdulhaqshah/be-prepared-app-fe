import { combineReducers } from "redux";
import * as types from "../actions/ActionTypes";

const initialState = {
  user: {},
  course: ""
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

export default combineReducers({
  userData,
  courseData
});
