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
              <QuestionsIndexItem question={q} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
