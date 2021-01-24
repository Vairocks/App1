import * as types from "../types";

const login = (state = { isLoggedIn: false, errorMessagge: "" }, action) => {
  switch (action.type) {
    case types.TRY_LOGIN:
      if (
        action.payload.username === "admin" &&
        action.payload.password === "admin"
      ) {
        return { ...state, isLoggedIn: true };
      } else {
        return { ...state, errorMessage: "Hint username and password = admin" };
      }
    case types.LOGOUT:
      return { ...state, isLoggedIn: false, errorMessage: "" };

    default:
      return state;
  }
};

export default login;
