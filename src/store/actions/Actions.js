import API from "../../api/index";
import * as types from "./actionTypes";

export const getData = () => dispatch => {
  API.userLogin()
    .then(results => {
      dispatch({
        type: types.GET_DATA,
        user: results.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};
