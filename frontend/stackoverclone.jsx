import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/Root";

import { signup, login, logout } from "./actions/session_actions";

import { fetchQuestions } from "./util/question_api_util";
import { clearEntity } from "./actions/entitites_actions";

import {
  fetchQuestionAnswers,
  postAnswer,
  updateAnswer,
  deleteAnswer,
} from "./actions/answers_actions";

import {fetchUsers} from './actions/users_actions'
import { downvoteQuestion, upvoteQuestion } from "./actions/votes_action"

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

  window.clearEntity = clearEntity;

  //testing fetch users
  window.fetchUsers = fetchUsers;

  //testing question votes
  window.upvoteQuestion = upvoteQuestion;
  window.downvoteQuestion = downvoteQuestion;

  ReactDOM.render(<Root store={store} />, root);
});
