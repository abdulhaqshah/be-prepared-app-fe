
// import { combineReducers } from "redux";
// import * as types from "../actions/ActionTypes";

const initialState = {
  email:"Humna@gmail.com"
//  user:{
//    name:"",
//    email:"",
//    token:"",
//    uuid:""
//  }
};

const Reducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === 'CHANGE_EMAIL') {
    return {
      ...state,
      email:action.payload
      // user: action.getData
    };
  }
  return newState;
};

// export default combineReducers({
 export default Reducer;
// });
