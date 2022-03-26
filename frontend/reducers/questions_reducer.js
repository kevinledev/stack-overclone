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
      return Object.assign({}, state, action.payload.questions);
    case RECEIVE_QUESTION:
      // return Object.assign({}, { [action.question.id]: action.question });
      return action.payload.question;
    case REMOVE_QUESTION:
      let nextState = Object.assign({}, state);
      delete nextState[action.questionId]
      return nextState;
    default:
      return state;
  }
}
export default questionsReducer;