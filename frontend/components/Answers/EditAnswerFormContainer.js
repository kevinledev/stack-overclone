import { connect } from "react-redux";
import { fetchQuestion, updateQuestion } from "../../actions/questions_actions";
import { withRouter } from "react-router-dom";
import EditAnswerForm from "./EditAnswerForm";

const mapStateToProps = (state, ownProps) => {
  return {
    answer: state.entities.answers[ownProps.match.params.questionId],
    answerer: state.entitites.user[state.entities.answers[ownProps.match.params.questionId].answerer.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    updateQuestion: (question) => dispatch(updateQuestion(question)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditAnswerForm)
);
