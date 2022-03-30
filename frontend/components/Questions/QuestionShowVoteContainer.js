import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  upvoteQuestion,
  downvoteQuestion,
  unvoteQuestion,
} from "../../actions/votes_actions";

import QuestionShowVote from "./QuestionShowVote";

const mapStateToProps = (state, ownProps) => {
  let currentQuestionId = ownProps.match.params.questionId;
  let question = state.entities.questions[currentQuestionId];
  let currentUserId = state.session.currentUserId;

  let voteScore = 0;
  let currentUserVote = 0;

  if (state.entities.votes) {
    Object.values(state.entities.votes).forEach((vote) => {
      if (vote.voteableType === "Question" && vote.voteableId === question.id){
      voteScore += vote.value;
      if (vote.voterId === currentUserId) {
        currentUserVote = vote.value;
      }}
    });
  }

  return {
    question: question,
    currentUserId: state.session.currentUserId,
    users: state.entities.users,
    voteScore: voteScore,
    highlightVote: currentUserVote
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    upvote: (questionId) => dispatch(upvoteQuestion(questionId)),
    downvote: (questionId) => dispatch(downvoteQuestion(questionId)),
    unvote: (questionId) => dispatch(unvoteQuestion(questionId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionShowVote));
