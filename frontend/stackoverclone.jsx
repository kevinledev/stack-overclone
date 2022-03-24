import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/Root";

import { signup, login, logout } from "./actions/session_actions";

import { fetchQuestions } from "./util/question_api_util";

import {
  fetchQuestionAnswers,
  postAnswer,
  updateAnswer,
  deleteAnswer,
} from "./actions/answers_actions";

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

  window.fetchQuestions = fetchQuestions;

  //testing answer actions
  window.postAnswer = postAnswer;
  window.updateAnswer = updateAnswer;
  window.deleteAnswer = deleteAnswer;
  window.fetchQuestionAnswers = fetchQuestionAnswers;

  //testing fetch users
  window.fetchUsers = fetchUsers;

  ReactDOM.render(<Root store={store} />, root);
});
