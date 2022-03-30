import * as VoteApiUtil from "../util/vote_api_util";

export const RECEIVE_VOTE = "RECEIVE_VOTE";
export const REMOVE_VOTE = "REMOVE_VOTE";

export const receiveVote = (payload) => {
  return {
    type: RECEIVE_VOTE,
    payload: payload,
  };
};

export const removeVote = (voteId) => {
  return {
    type: REMOVE_VOTE,
    voteId
  }
}

export const upvoteQuestion = (questionId) => (dispatch) => {
  return VoteApiUtil.upvoteQuestion(questionId).then((vote) => {
    dispatch(receiveVote(vote));
  });
};

export const downvoteQuestion = (questionId) => (dispatch) => {
  return VoteApiUtil.downvoteQuestion(questionId).then((vote) => {
    dispatch(receiveVote(vote));
  });
};

export const unvoteQuestion = (questionId) => (dispatch) => {
  return VoteApiUtil.unvoteQuestion(questionId).then((voteId) => {
    dispatch(removeVote(voteId));
  });
};
