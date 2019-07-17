import { combineReducers } from "redux";
import { getData } from "../actions/User";

const initialState = {
  name: "Humna",
  email: "",
  pass: "",
  token: ""
};

const userReducer = (state = initialState, action) => {
  if (action.type === getData) {
    return state;
  }else{
    return "no action"
  }
};

export default combineReducers({
  userReducer
});
