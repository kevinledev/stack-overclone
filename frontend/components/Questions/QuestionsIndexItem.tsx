import React from "react";
import { Link } from "react-router-dom";
import { Question } from "../../types/question";
import { User } from "../../types/user";

type QuestionsIndexItemProps = {
  question: Question;
  asker: User;
};

const QuestionsIndexItem = ({ question, asker }: QuestionsIndexItemProps) => {
  const { answerIds, voteScore, id, title, body, createdAt, askerId } =
    question;
  const numAnswers =
    answerIds.length === 1 ? (
      <div className="qi-answers-nonzero">1 answer</div>
    ) : answerIds.length === 0 ? (
      <div className="qi-answers-zero">0 answers</div>
    ) : (
      <div className="qi-answers-nonzero">{answerIds.length} answers</div>
    );

  return (
    <div className="question-index-item">
      <div className="question-index-item-counts">
        <div className="qi-score">
          {voteScore} {voteScore !== 1 ? "votes" : "vote"}
        </div>
        {numAnswers}
      </div>
      <div className="question-index-item-main-container">
        <div className="questionindex-title-wrapper">
          <Link to={`/questions/${id}`} className="questionindex-item-title">
            {title}
          </Link>
        </div>
        <div className="questionindex-item-body">{body}</div>
        <div className="questionindex-item-details">
          <span className="questionindex-item-asker">
            <Link
              to={`/users/${askerId}`}
              className="questionindex-item-asker-link"
            >
              {asker.username}
            </Link>
            asked on {createdAt.slice(0, 10)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuestionsIndexItem;
