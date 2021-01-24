import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import login from "./reducer/loginReducer";

export const store = createStore(login, applyMiddleware(thunk));
