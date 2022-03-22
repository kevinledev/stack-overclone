import { connect } from "react-redux";
import {
  fetchQuestions,
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex)