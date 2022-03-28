import { connect } from "react-redux";
import {
  fetchQuestion,
  deleteQuestion,
  updateQuestion,
} from "../../actions/questions_actions";
import {
  updateAnswer,
  deleteAnswer,
  fetchQuestionAnswers, fetchAnswers
} from "../../actions/answers_actions";
import QuestionShow from "./QuestionShow";
import {
  upvoteQuestion,
  downvoteQuestion,
  unvoteQuestion
} from "../../actions/votes_actions";


const mapStateToProps = (state, ownProps) => {
  let currentQuestionId = ownProps.match.params.questionId;

  const answers = state.entities.answers ? (
    Object.values(state.entities.answers).filter(
      (a) => a.questionId === parseInt(currentQuestionId)
    )
  ) : (
    []
  )

  let returnObject = {
    question: state.entities.questions[currentQuestionId],
    answers: answers,
    currentUserId: state.session.currentUserId,
    users: state.entities.users,
  };

  return returnObject;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    updateQuestion: (question) => dispatch(updateQuestion(question)),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
    updateAnswer: (answer) => dispatch(updateAnswer(answer)),
    deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId)),
    fetchAnswers: () => dispatch(fetchAnswers()),
    fetchQuestionAnswers: (questionId) =>
      dispatch(fetchQuestionAnswers(questionId)),
    // upvote: (questionId) => dispatch(upvoteQuestion(questionId)),
    // downvote: (questionId) => dispatch(downvoteQuestion(questionId)),
    // unvote: (questionId) => dispatch(unvoteQuestion(questionId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
