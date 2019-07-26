import { combineReducers } from "redux";
import * as types from "../actions/ActionTypes";

const initialState = {
  user: {},
  courseId: ""
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
const course = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === types.GET_COURSE_ID) {
    return {
      ...state,
      courseId: action.courseId,
      status: action.status
    };
  }
  return newState;
};

export default combineReducers({
  userData,
  course
});
