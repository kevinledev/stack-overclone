import React from "react";
import { Link } from "react-router-dom";

export default class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { answer, deleteAnswer, currentUserId } = this.props;
    const answerDisplayOptions =
      answer && currentUserId === answer.answerer_id ? (
        <div className="question-show-options">
          <Link to={`/`}>Edit</Link>
          <button
            className="question-show-delete-button"
            onClick={this.handleDelete}
          >
            Delete
          </button>
        </div>
      ) : (
        <div className="question-show-options"></div>
      );

    return (
      <div>
        <div className="answer-body">{answer.body}</div>
        <div className="answer-sub-body">
          {answerDisplayOptions}
          <div className="answer-details">
            <div className="answer-timestamp">
              answered&nbsp;{answer.created_at.slice(0, 10)}&nbsp;at&nbsp;
            {answer.created_at.slice(11,19)}</div>
            <Link to={`/users/${answer.answerer.id}`}>
              {answer.answerer.username}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
