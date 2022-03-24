import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { postAnswer } from "../../actions/answers_actions";
import CreateAnswerForm from "./CreateAnswerForm";

const mapStateToProps = (state, ownProps) => {
  return {
    answer: {
      question_id: ownProps.match.params.questionId,
      answerer_id: state.session.currentUserId,
      body: "",
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postAnswer: answer => dispatch(postAnswer(answer)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateAnswerForm));
