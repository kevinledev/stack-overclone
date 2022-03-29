import React from "react";
import QuestionsIndexItem from "./QuestionsIndexItem";
import { Link } from "react-router-dom";

export default class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchQuestions();
  }
  

  render() {
    const { questions, users } = this.props;

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
              <QuestionsIndexItem question={q} asker={users[q.askerId]}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
