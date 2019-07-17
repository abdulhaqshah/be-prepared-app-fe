import * as types from "./ActionTypes";

// export const setData = () => dispatch => {
//   dispatch({
//     type: types.SET_DATA
//   });
// };

export const getData = () => dispatch => {
  dispatch({
    type: types.GET_DATA
  });
};
