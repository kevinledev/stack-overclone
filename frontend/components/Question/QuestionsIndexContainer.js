import { connect } from "react-redux";
import {
  fetchQuestions,
  deleteQuestion,
} from "../../actions/questions_actions";
import QuestionsIndex from "./QuestionsIndex";


const mapStateToProps = (state) => {
  return {
    questions: Object.values(state.entities.questions)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex)