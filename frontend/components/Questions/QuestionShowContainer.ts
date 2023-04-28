import { connect, ConnectedProps } from "react-redux";
import {
  fetchQuestion,
  deleteQuestion,
  updateQuestion,
} from "../../actions/questions_actions";
import {
  updateAnswer,
  deleteAnswer,
  fetchQuestionAnswers,
  fetchAnswers,
} from "../../actions/answers_actions";
import QuestionShow from "./QuestionShow";
import { RootState } from "../../reducers/root_reducer.js";
import { Answer } from "../../types/answer";
import { Question } from "../../types/question";
import { User } from "../../types/user";

interface OwnProps {
  match: {
    params: {
      questionId: string;
    };
  };
}

interface StateProps {
  question: Question;
  answers: Answer[];
  currentUserId: number;
  users: { [key: number]: User };
}

interface DispatchProps {
  fetchQuestion: (questionId: number) => void;
  updateQuestion: (question: Question) => void;
  deleteQuestion: (questionId: number) => void;
  updateAnswer: (answer: Answer) => void;
  deleteAnswer: (answerId: number) => void;
  fetchAnswers: () => void;
  fetchQuestionAnswers: (questionId: number) => void;
}

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  const currentQuestionId = parseInt(ownProps.match.params.questionId);
  const answers = Object.values(state.entities.answers as Answer[]).filter(
    (answer) => answer.questionId === currentQuestionId
  );

  return {
    question: state.entities.questions[currentQuestionId],
    answers,
    currentUserId: state.session.currentUserId,
    users: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  fetchQuestion: (questionId: number) => dispatch(fetchQuestion(questionId)),
  updateQuestion: (question: Question) => dispatch(updateQuestion(question)),
  deleteQuestion: (questionId: number) => dispatch(deleteQuestion(questionId)),
  updateAnswer: (answer: Answer) => dispatch(updateAnswer(answer)),
  deleteAnswer: (answerId: number) => dispatch(deleteAnswer(answerId)),
  fetchAnswers: () => dispatch(fetchAnswers()),
  fetchQuestionAnswers: (questionId: number) =>
    dispatch(fetchQuestionAnswers(questionId)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(QuestionShow);
