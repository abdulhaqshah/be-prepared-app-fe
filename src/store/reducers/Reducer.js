import { combineReducers } from "redux";

const initialState = {
  name: "Humna",
  email: "",
  pass: "",
  token: ""
};

const userReducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === "setData") {
    // const name = initialState.name;
    // const email = initialState.email;
    // const token = initialState.token;
  } else if (action.type === "getData") {
    return this.state.name;
  } else {
    return newState;
  }
};

export default combineReducers({
  userReducer
});
