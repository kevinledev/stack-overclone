import React from "react";
import QuestionsIndexItem from "./QuestionsIndexItem";
import { Link } from "react-router-dom";

export default class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }
  

  render() {
    const { questions, deleteQuestion } = this.props;
    const questionsSortedNew = questions.reverse();

    return (
      <div className="question-index">
        <div className="question-index-heading">
          All Questions
          <Link to={`/`}>
            <button className="ask-question">Ask Question</button>
          </Link>
        </div>
        <h2>{questions.length} questions</h2>
        <div className="question-index-wrapper">
          {questionsSortedNew.map((q) => (
            <QuestionsIndexItem question={q} deleteQuestion={deleteQuestion} />
          ))}
        </div>
      </div>
    );
  }
}