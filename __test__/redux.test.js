import login from "../Redux/reducer/loginReducer";
import * as types from "../Redux/types";
import { tryLogin } from "../Redux/actionCreator";
import { store } from "../Redux/createStore";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

describe("login reducer", () => {
  it("should return intial state with isloggedIn false", () => {
    const returnedState = login({}, {});
    expect(returnedState.isLoggedIn).toBeFalsy();
  });
  it("should return new state with isloggedIn true", () => {
    const returnedState = login(undefined, {
      type: types.TRY_LOGIN,
      payload: { username: "admin", password: "admin" },
    });
    expect(returnedState.isLoggedIn).toBeTruthy();
  });
  it("should return new state with error messagge", () => {
    const returnedState = login(undefined, {
      type: types.TRY_LOGIN,
      payload: { username: "abc", password: "xyz" },
    });
    expect(returnedState.errorMessage).toBeTruthy();
  });
});

describe("action tryLogin", () => {
  it("should change state of the app to isLoggedIn true", () => {
    const mockStore = createStore(login, applyMiddleware(thunk));
    new Promise(() => {
      mockStore.dispatch(tryLogin({ username: "admin", password: "admin" }));
    }).then(() => {
      const newState = store.getState();
      expect(newState.isLoggedIn).toBeTruthy();
    });
  });
  it("should change state of the app to isLoggedIn false", () => {
    const mockStore = createStore(login, applyMiddleware(thunk));
    new Promise(() => {
      mockStore.dispatch({
        type: types.LOGOUT,
        payload: { isLoggedIn: false },
      });
    }).then(() => {
      const newState = store.getState();
      expect(newState.isLoggedIn).toBeTruthy();
    });
  });
});
