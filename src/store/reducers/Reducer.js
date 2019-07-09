import { combineReducers } from "redux";

const initialState = {
  name: "",
  email: "",
  token: ""
};

const userReducer = (state = initialState, action) => {
  return state;
};

export default combineReducers({
  userReducer
});
