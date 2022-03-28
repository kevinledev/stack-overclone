import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchQuestion } from "../../actions/questions_actions";

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
  if (question.votes) {
    Object.values(question.votes).forEach((vote) => {
      voteScore += vote.value;
      if (vote.voterId === currentUserId) {
        currentUserVote = vote.value;
      }
    });
  }
  let returnObject = {
    question: question,
    currentUserId: state.session.currentUserId,
    users: state.entities.users,
  };

  if (question) {
    returnObject["voteScore"] = voteScore;
    returnObject.currentUserVote = currentUserVote;
  }



  return returnObject;
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    upvote: (questionId) => dispatch(upvoteQuestion(questionId)),
    downvote: (questionId) => dispatch(downvoteQuestion(questionId)),
    unvote: (questionId) => dispatch(unvoteQuestion(questionId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionShowVote));
