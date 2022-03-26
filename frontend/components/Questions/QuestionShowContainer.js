import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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

const mapStateToProps = (state, ownProps) => {
  let currentQuestionId = ownProps.match.params.questionId;
  return {
    question: state.entities.questions[currentQuestionId],
    answers: Object.values(state.entities.answers).filter(
      (a) => a.questionId === parseInt(currentQuestionId)
    ),
    currentUserId: state.session.currentUserId,
    users: state.entities.users,
  };
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
