
import { combineReducers } from "redux";
import * as types from "../actions/ActionTypes";

const initialState = {
 user:{
   name:"",
   email:"",
   token:"",
   uuid:""
 }
};

const Reducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === types.GET_DATA) {
    return {
      ...state,
      user: action.getData
    };
  }
  return newState;
};

export default combineReducers({
 Reducer
});
