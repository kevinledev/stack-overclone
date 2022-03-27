import React from "react";
import { Link } from "react-router-dom";

export default class QuestionsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { question, asker } = this.props;

    const numAnswers =
      question.answerIds.length === 1 ? (
        <div className="qi-answers-nonzero">1 answer</div>
      ) : (
        question.answerIds.length === 0 ? (
          <div className="qi-answers-zero">
            0 answers
          </div>
        ) : (
        <div className="qi-answers-nonzero">
          {question.answerIds.length} answers
        </div>
        )
      );

    return (
      <div className="question-index-item">
          <div className="question-index-item-counts">
            <div className="qi-score">
              # votes
            </div>
            {numAnswers}
          </div>
        <div className="question-index-item-main-container">
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
      </div>
    );
  }
}
