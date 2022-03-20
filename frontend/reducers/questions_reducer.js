import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION
} from "../actions/questions_actions"

const questionsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION:
      newState[action.question.id] = action.question;
      return newState;
    case REMOVE_QUESTION:
      delete newState[action.questionId]
      return newState;
    default:
      return state;
  }
}
export default questionsReducer;