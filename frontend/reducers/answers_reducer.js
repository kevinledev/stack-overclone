import {
  RECEIVE_ANSWER,
  REMOVE_ANSWER,
} from "../actions/questions_actions";

const answersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ANSWER:
      return Object.assign({}, { [action.answer.id]: action.answer });
    case REMOVE_ANSWER:
      let nextState = Object.assign({}, state);
      delete nextState[action.answerId];
      return nextState;
    default:
      return state;
  }
};
export default answersReducer;
