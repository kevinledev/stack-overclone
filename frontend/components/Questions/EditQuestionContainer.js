import { connect } from "react-redux";
import EditQuestion from "./EditQuestion";
import { fetchQuestion, updateQuestion } from "../../actions/questions_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.entities.questions[ownProps.match.params.questionId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: (question) => dispatch(fetchQuestion(question)),
    updateQuestion: (question) => dispatch(updateQuestion(question))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestion);
