import { connect } from "react-redux";
import { fetchQuestions } from "../../actions/questions_actions";
import QuestionsIndex from "./QuestionsIndex";
import { Question } from "../../types/question";
import { User } from "../../types/user";

type QuestionsIndexStateProps = {
  questions: Question[];
  users: User[];
};

type QuestionsIndexDispatchProps = {
  fetchQuestions: () => void;
};

const mapStateToProps = (state): QuestionsIndexStateProps => {
  console.log(state.entities.users);
  return {
    questions: Object.values(state.entities.questions),
    users: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch: any): QuestionsIndexDispatchProps => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex);
