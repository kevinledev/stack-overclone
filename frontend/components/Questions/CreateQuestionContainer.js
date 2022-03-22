import { connect } from "react-redux";
import { postQuestion } from "../../actions/questions_actions";
import QuestionForm from "./QuestionForm";

const mapStateToProps = state => {
  return {
    question: {title: "", body: ""},
    formType: "Ask question"
  }
}

const mapDispatchToProps = dispatch => {
  return {
    formAction: (question) => dispatch(postQuestion(question))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm)

