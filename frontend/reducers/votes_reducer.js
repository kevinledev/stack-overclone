import { RECEIVE_QUESTION } from "../actions/questions_actions";
import { RECEIVE_VOTE, REMOVE_VOTE } from "../actions/votes_actions";
import { RECEIVE_ANSWERS } from "../actions/answers_actions";

const votesReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  
  switch(action.type) {
    case RECEIVE_QUESTION:
      return Object.assign({}, state, action.payload.votes);
    case RECEIVE_ANSWERS:
      return Object.assign({}, state, action.payload.votes);
    case RECEIVE_VOTE:
      return Object.assign({}, state, action.payload.votes)
    case REMOVE_VOTE:
      delete newState[action.voteId];
      return newState;
    default:
      return state
  }
}

export default votesReducer;