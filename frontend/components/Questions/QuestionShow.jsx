import React from "react";
import { Link } from "react-router-dom";

class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  render() {
    const { question, currentUserId } = this.props;

    const questionShowOptions =
      question && currentUserId === question.asker_id ? (
        <div className="question-show-options">
          <Link to={`/questions/${question.id}/edit`}>Edit</Link>
          <span></span>
        </div>
      ) : (
        <></>
      );

    const questionDisplay = question ? (
      <div className="question-show">
        <div className="question-show-heading">
          <div className="question-show-first-row">
            <span>{question.title}</span>
            <Link to={`/ask-question`}>
              <button className="ask-question">Ask Question</button>
            </Link>
          </div>
          <div className="question-show-details">
            <h4 className="question-show-details-key">Asked&nbsp;&nbsp;</h4>
            <h4 className="question-show-details-value">
              {question.created_at}
            </h4>
            <h4 className="question-show-details-key">Modified&nbsp;&nbsp;</h4>
            <h4 className="question-show-details-value">
              {question.updated_at}
            </h4>
          </div>
        </div>
        <div className="question-show-body-container">
          <div className="">{question.body}</div>
          {questionShowOptions}
        </div>
      </div>
    ) : (
      <></>
    );

    return <div className="question-show-container">{questionDisplay}</div>;
  }
}
export default QuestionShow;
