import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/Root";

import { signup, login, logout } from "./actions/session_actions";

import {
  fetchQuestions,
  fetchQuestion,
  postQuestion,
  updateQuestion,
  deleteQuestion,
} from "./actions/questions_actions";

import {fetchUsers} from './actions/users_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // const store = configureStore();

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUserId: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // session testing
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  //testing questions actions
  window.fetchQuestions = fetchQuestions;
  window.fetchQuestion = fetchQuestion;
  window.postQuestion = postQuestion;
  window.updateQuestion = updateQuestion;
  window.deleteQuestion = deleteQuestion;

  //testing fetch users
  window.fetchUsers = fetchUsers;

  ReactDOM.render(<Root store={store} />, root);
});
