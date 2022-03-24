import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  fetchQuestion,
  deleteQuestion,
} from "../../actions/questions_actions";
import { deleteAnswer, fetchQuestionAnswers } from "../../actions/answers_actions";
import QuestionShow from "./QuestionShow";

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.entities.questions[ownProps.match.params.questionId],
    answers: Object.values(state.entities.answers),
    currentUserId: state.session.currentUserId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
    fetchQuestionAnswers:  (questionId) => dispatch(fetchQuestionAnswers(questionId)),
    deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
