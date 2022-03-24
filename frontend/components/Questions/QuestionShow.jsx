import React from "react";
import { Link } from "react-router-dom";
import AnswerItem from "../Answers/AnswerItem";

class QuestionShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
    this.props.fetchQuestionAnswers(this.props.match.params.questionId);
  }

  // componentDidUpdate(prevProps){
  //   if (prevProps !== this.props) {
  //     this.setState(this.props.answers)
  //   }
  // }

  handleDelete() {
    this.props
      .deleteQuestion(this.props.question.id)
      .then(() => this.props.history.push(`/questions`));
  }

  render() {
    const { question, currentUserId, answers, deleteAnswer } = this.props;
    const questionShowOptions =
      question && currentUserId === question.asker_id ? (
        <div className="question-show-options">
          <Link to={`/questions/${question.id}/edit`}>Edit</Link>
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

    const questionDisplay = question ? (
      <div className="question-show">
        <div className="question-show-heading">
          <div className="question-show-first-row">
            <span className="question-show-title">{question.title}</span>
            <Link to={`/ask-question`}>
              <button className="ask-question">Ask Question</button>
            </Link>
          </div>
          <div className="question-show-details">
            <h4 className="question-show-details-key">Asked&nbsp;&nbsp;</h4>
            <h4 className="question-show-details-value">
              {question.created_at.slice(0, 10)}
            </h4>
            <h4 className="question-show-details-key">Modified&nbsp;&nbsp;</h4>
            <h4 className="question-show-details-value">
              {question.updated_at.slice(0, 10)}
            </h4>
          </div>
        </div>
        <div className="question-show-body-container">
          <div className="question-show-body-text">{question.body}</div>
          <div className="question-show-sub-body">
            {questionShowOptions}
            <div className="asker-details">
              <h1>asked&nbsp;on {question.created_at.slice(0, 10)}</h1>
              <Link to={`/users/${question.asker.id}`}>
                {question.asker.username}
              </Link>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <></>
    );


    const answerDisplay = answers ? (
        <div className="question-answers-wrapper">
          <h1>{answers.length} Answers</h1>
          {answers.map(a => 
          <AnswerItem answer={a} deleteAnswer={deleteAnswer} currentUserId={currentUserId}/>
          )}
        </div>
    ) : (
      null
    )

    return <div className="question-show-container">
      {questionDisplay}
      {answerDisplay}
      </div>;
  }
}
export default QuestionShow;
