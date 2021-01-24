import * as types from "./types";

export const tryLogin = ({ username, password }) => {
  return (dispatch) => {
    dispatch({ type: types.TRY_LOGIN, payload: { username, password } });
  };
};
