import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  fetchQuestion,
  deleteQuestion,
} from "../../actions/questions_actions";
import QuestionShow from "./QuestionShow";

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.entities.questions[ownProps.match.params.questionId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
