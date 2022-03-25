import React from "react";
import { Link } from "react-router-dom";
import EditAnswerForm from "./EditAnswerForm";

export default class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editingAnswer: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEditAnswer = this.toggleEditAnswer.bind(this);
  }

  handleDelete() {
    this.props.deleteAnswer(this.props.answer.id);
  }

  toggleEditAnswer() {
    this.state.editingAnswer
      ? this.setState({ editingAnswer: false })
      : this.setState({ editingAnswer: true });
  }

  render() {
    const { editingAnswer } = this.state;
    const { answer, currentUserId, updateAnswer } = this.props;

    const answerDisplayOptions =
      currentUserId === answer.answerer.id ? (
        editingAnswer ? (

            <EditAnswerForm
              answer={answer}
              updateAnswer={updateAnswer}
            />

        ) : (
          <div className="question-show-sub-body">
            <div className="question-show-options">
              <button onClick={this.toggleEditAnswer}>Edit</button>
              <button
                className="question-show-delete-button"
                onClick={this.handleDelete}
              >
                Delete
              </button>
            </div>
            <div className="answer-details">
              <div className="answer-timestamp">
                answered&nbsp;{answer.createdAt.slice(0, 10)}&nbsp;at&nbsp;
                {answer.createdAt.slice(11, 16)}
              </div>
              <Link to={`/users/${answer.answerer.id}`}>
                {answer.answerer.username}
              </Link>
            </div>
          </div>
        )
      ) : (
        <div className="answer-show-sub-body">
          <div className="question-show-options"></div>
          <div className="answer-details">
            <div className="answer-timestamp">
              answered&nbsp;{answer.createdAt.slice(0, 10)}&nbsp;at&nbsp;
              {answer.createdAt.slice(11, 16)}
            </div>
            <Link to={`/users/${answer.answerer.id}`}>
              {answer.answerer.username}
            </Link>
          </div>
        </div>
      );

    return (
      <div className="answer-item">
        <div className="answer-body">{answer.body}</div>
        <div className="question-sub-body">{answerDisplayOptions}</div>
      </div>
    );
  }
}
