import { CLEAR_ENTITY } from "../actions/entitites_actions";
import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION
} from "../actions/questions_actions"

import { RECEIVE_VOTE } from "../actions/votes_action";

const questionsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return Object.assign({}, state, action.payload.questions);
    case RECEIVE_QUESTION:
      // return Object.assign({}, { [action.question.id]: action.question });
      return action.payload.question;
    case REMOVE_QUESTION:
      delete newState[action.questionId]
      return newState;
    case RECEIVE_VOTE:
      newState = Object.assign({}, state, action.payload.votes);
      return newState
    case CLEAR_ENTITY:
      return {}
    default:
      return state;
  }
}
export default questionsReducer;