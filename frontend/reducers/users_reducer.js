import { RECEIVE_QUESTIONS, RECEIVE_QUESTION } from "../actions/questions_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER, RECEIVE_USERS } from "../actions/users_actions";
import { RECEIVE_ANSWERS } from "../actions/answers_actions";

const usersReducer = (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_QUESTIONS:
      return Object.assign({}, state, action.payload.users)
    case RECEIVE_QUESTION:
      return Object.assign({}, state, action.payload.asker)
    case RECEIVE_ANSWERS:
      return Object.assign({}, state, action.payload.answerer);
    default:
      return state;
  }
};

export default usersReducer;
