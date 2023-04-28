import React, { useEffect } from "react";
import QuestionsIndexItem from "./QuestionsIndexItem";
import { Link } from "react-router-dom";
import { Question } from "../../types/question";
import { User } from "../../types/user";

type QuestionsIndexProps = {
  questions: Question[];
  users: User[];
  fetchQuestions: () => void;
};

const QuestionsIndex = ({
  questions,
  users,
  fetchQuestions,
}: QuestionsIndexProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchQuestions();
  }, [fetchQuestions]);

  return (
    <div className="main-container">
      <div className="question-index">
        <div className="question-index-heading">
          All Questions
          <Link to={`/ask-question`}>
            <button className="ask-question">Ask Question</button>
          </Link>
        </div>
        <h2>{questions.length} questions</h2>
        <div className="question-index-wrapper">
          {questions.map((q) => (
            <QuestionsIndexItem
              key={q.id}
              question={q}
              asker={users[q.askerId]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsIndex;
