import { connect } from "react-redux";
import { postQuestion } from "../../actions/questions_actions";
import CreateQuestionForm from "./CreateQuestionForm";

const mapStateToProps = state => {
  return {
    question: {title: "", body: ""},
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postQuestion: (question) => dispatch(postQuestion(question))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestionForm)

