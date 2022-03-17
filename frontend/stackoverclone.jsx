import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import {signup, login, logout} from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  //testing
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h1>entry file here</h1>, root);
});
