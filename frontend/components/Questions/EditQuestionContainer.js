import { connect } from "react-redux";
import EditQuestion from "./EditQuestion";
import { fetchQuestion, updateQuestion } from "../../actions/questions_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {

  return {
    question: state.entities.questions[ownProps.match.params.questionId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    updateQuestion: (question) => dispatch(updateQuestion(question)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditQuestion));
