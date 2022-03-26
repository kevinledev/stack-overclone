import React from "react";
import { Link } from "react-router-dom";

export default class QuestionsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { question, asker } = this.props;

    return (
      <div className="question-index-item">
        <div className="questionindex-title-wrapper">
          <Link
            to={`/questions/${question.id}`}
            className="questionindex-item-title"
          >
            {question.title}
          </Link>
        </div>
        <div className="questionindex-item-body">{question.body}</div>
        <div className="questionindex-item-details">
          <span className="questionindex-item-asker">
            <Link
              to={`/users/${question.askerId}`}
              className="questionindex-item-asker-link"
            >
              {asker.username}
            </Link>
            &nbsp;asked&nbsp;on {question.createdAt.slice(0, 10)}
          </span>
        </div>
      </div>
    );
  }
}
