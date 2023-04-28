import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import EditQuestion from "./EditQuestion";
import { RootState } from "../../reducers/root_reducer.js";
import { fetchQuestion, updateQuestion } from "../../actions/questions_actions";
import { User } from "../../types/user";
import { Question } from "../../types/question";

interface OwnProps {
  match: {
    params: {
      questionId: string;
    };
  };
}

interface StateProps {
  question?: Question;
  asker?: User;
}

interface DispatchProps {
  fetchQuestion: (questionId: number) => void;
  updateQuestion: (question: Question) => void;
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = OwnProps &
  PropsFromRedux &
  RouteComponentProps<{ questionId: string }>;

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  const currentUserId = state.session.currentUserId;
  const questionId = parseInt(ownProps.match.params.questionId);

  return {
    question: state.entities.questions[questionId],
    asker: state.entities.users[currentUserId],
  };
};

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  fetchQuestion: (questionId: number) => dispatch(fetchQuestion(questionId)),
  updateQuestion: (question: Question) => dispatch(updateQuestion(question)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(connector(EditQuestion));
