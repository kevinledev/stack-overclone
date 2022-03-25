import React from "react";
import { Link } from "react-router-dom";
import AnswerItem from "../Answers/AnswerItem";
import CreateAnswerFormContainer from "../Answers/CreateAnswerFormContainer";

import EditQuestionContainer from "./EditQuestionContainer";

class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editingQuestion: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEditQuestion = this.toggleEditQuestion.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
    this.props.fetchQuestionAnswers(this.props.match.params.questionId);
  }

  handleDelete() {
    this.props
      .deleteQuestion(this.props.question.id)
      .then(() => this.props.history.push(`/questions`));
  }

  toggleEditQuestion() {
    console.log(this.state.editingQuestion);
    this.state.editingQuestion
      ? this.setState({ editingQuestion: false })
      : this.setState({ editingQuestion: true });
  }

  render() {
    const { editingQuestion } = this.state;
    const { question, currentUserId, answers, deleteAnswer } = this.props;


    // const questionShowOptions =
    //   !editingQuestion && question && currentUserId === question.asker_id ? (
    //     <div className="question-show-sub-body">
    //       <div className="question-show-options">
    //         <button onClick={this.toggleEditQuestion}>Edit</button>
    //         <button
    //           className="question-show-delete-button"
    //           onClick={this.handleDelete}
    //         >
    //           Delete
    //         </button>
    //       </div>
    //       <div className="asker-details">
    //         <h1>asked&nbsp;on {question.created_at.slice(0, 10)}</h1>
    //         <Link to={`/users/${question.asker.id}`}>
    //           {question.asker.username}
    //         </Link>
    //       </div>
    //     </div>
    //   ) : !question ? null : (
    //     <div className="question-show-sub-body">
    //       <div className="question-show-options"></div>
    //       <div className="asker-details">
    //         <h1>asked&nbsp;on {question.created_at.slice(0, 10)}</h1>
    //         <Link to={`/users/${question.asker.id}`}>
    //           {question.asker.username}
    //         </Link>
    //       </div>
    //     </div>
    //   );

    const questionShowOptions = !question ? null : currentUserId !==
      question.asker.id ? (
      <div className="question-show-sub-body">
        <div className="question-show-options"></div>
        <div className="asker-details">
          <h1>asked&nbsp;on {question.createdAt.slice(0, 10)}</h1>
          <Link to={`/users/${question.asker.id}`}>
            {question.asker.username}
          </Link>
        </div>
      </div>
    ) : // if the user is the asker
    !editingQuestion ? (
      <div className="question-show-sub-body">
        <div className="question-show-options">
          <button onClick={this.toggleEditQuestion}>Edit</button>
          <button
            className="question-show-delete-button"
            onClick={this.handleDelete}
          >
            Delete
          </button>
        </div>
        <div className="asker-details">
          <h1>asked&nbsp;on {question.createdAt.slice(0, 10)}</h1>
          <Link to={`/users/${question.asker.id}`}>
            {question.asker.username}
          </Link>
        </div>
      </div>
    ) : // if user is editing question, editQuestionForm will display
    null;

    const editQuestionForm = editingQuestion ? <EditQuestionContainer /> : null;

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
              {question.createdAt.slice(0, 10)}
            </h4>
            <h4 className="question-show-details-key">Modified&nbsp;&nbsp;</h4>
            <h4 className="question-show-details-value">
              {question.updatedAt.slice(0, 10)}
            </h4>
          </div>
        </div>
        <div className="question-show-body-container">
          <div className="question-show-body-text">{question.body}</div>
          {editQuestionForm}
          {questionShowOptions}
        </div>
      </div>
    ) : (
      <></>
    );

    const answerDisplay = answers ? (
      <div className="question-answers-wrapper">
        <h1>{answers.length} Answers</h1>
        {answers.map((a) => (
          <AnswerItem
            answer={a}
            deleteAnswer={deleteAnswer}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    ) : null;

    return (
      <div className="question-show-container">
        {questionDisplay}
        {answerDisplay}
        <CreateAnswerFormContainer />
      </div>
    );
  }
}
export default QuestionShow;
