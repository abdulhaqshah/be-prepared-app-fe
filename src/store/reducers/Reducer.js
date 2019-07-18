import { combineReducers } from "redux";
import * as types from "../actions/ActionTypes";

const initialState = {
  user: {}
};

const user = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === types.GET_USER_DATA) {
    return {
      ...state,
      user: action.user,
      status:action.status,
      message:action.message
    };
  }
  return newState;
};

export default combineReducers({
  user
});
