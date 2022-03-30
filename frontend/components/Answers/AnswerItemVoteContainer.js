import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  upvoteAnswer,
  downvoteAnswer,
  unvoteAnswer,
} from "../../actions/votes_actions";

import AnswerItemVote from "./AnswerItemVote";

const mapStateToProps = (state, ownProps) => {

  let answer = ownProps.answer;
  let currentUserId = state.session.currentUserId;

  let voteScore = 0;
  let currentUserVote = 0;

  if (state.entities.votes) {
    Object.values(state.entities.votes).forEach((vote) => {
      if (vote.voteableType === "Answer" && vote.voteableId === answer.id) {
        voteScore += vote.value;
        if (vote.voterId === currentUserId) {
          currentUserVote = vote.value;
        }
      }
    });
  }

  return {
    answer: answer,
    currentUserId: state.session.currentUserId,
    users: state.entities.users,
    voteScore: voteScore,
    highlightVote: currentUserVote,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    upvote: (questionId) => dispatch(upvoteAnswer(questionId)),
    downvote: (questionId) => dispatch(downvoteAnswer(questionId)),
    unvote: (questionId) => dispatch(unvoteAnswer(questionId)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AnswerItemVote)
);
