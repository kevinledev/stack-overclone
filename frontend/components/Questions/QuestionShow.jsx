import React from "react";
import { Link } from "react-router-dom";
import AnswerItem from "../Answers/AnswerItem";
import CreateAnswerFormContainer from "../Answers/CreateAnswerFormContainer";

import EditQuestionContainer from "./EditQuestionContainer";

class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingQuestion: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEditQuestion = this.toggleEditQuestion.bind(this);
    // this.handleVote = this.handleVote.bind(this);
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
    // console.log(this.state.editingQuestion);
    this.state.editingQuestion
      ? this.setState({ editingQuestion: false })
      : this.setState({ editingQuestion: true });
  }

  handleVote(val) {
    let currentUserVote = this.props.currentUserVote;
    let currentQuestionId = this.props.question.id;

    if (currentUserVote === val) {
      this.props.unvote(currentQuestionId);
    } else if (val === 1) {
      this.props.upvote(currentQuestionId);
    } else {
      this.props.downvote(currentQuestionId);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.setState( {voteScore: this.state.voteScore })
    }
  }



  render() {
    const { editingQuestion } = this.state;
    const {
      question,
      currentUserId,
      answers,
      deleteAnswer,
      updateAnswer,
      users,
      currentUserVote,
    } = this.props;



    const questionShowOptions = !question ? null : currentUserId !==
      question.askerId ? (
      <div className="question-show-sub-body">
        <div className="question-show-options"></div>
        <div className="asker-details">
          <h1>asked&nbsp;on {question.createdAt.slice(0, 10)}</h1>
          <Link to={`/users/${question.askerId}`}>
            {users[question.askerId].username}
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
          <Link to={`/users/${question.askerId}`}>
            {users[question.askerId].username}
          </Link>
        </div>
      </div>
    ) : // if user is editing question, editQuestionForm will display
    null;

    const editQuestionForm = editingQuestion ? <EditQuestionContainer /> : null;


    const voteScoreDisplay = this.state.voteScore ? (
      <h1>{this.state.voteScore}</h1>
    ) : 0;

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
          <div className="question-show-body-left">
            <div
              className={
                currentUserVote === 1 ? "uparrow_activated" : "uparrow"
              }
              onClick={() => this.handleVote(1)}
            ></div>
            {voteScoreDisplay}


            <div
              className={
                currentUserVote === -1 ? "downarrow_activated" : "downarrow"
              }
              onClick={() => this.handleVote(-1)}
            ></div>
          </div>
          <div className="question-show-body-right">
            <div className="question-show-body-text">{question.body}</div>
            {editQuestionForm}
            {questionShowOptions}
          </div>
        </div>
      </div>
    ) : (
      <></>
    );

    const amtAnswers =
      answers.length === 1 ? (
        <h1>1 Answer</h1>
      ) : (
        <h1>{answers.length} Answers</h1>
      );

    const answerDisplay = answers ? (
      <div className="question-answers-wrapper">
        {amtAnswers}
        {answers.map((a) => (
          <AnswerItem
            answer={a}
            answererUsername={users[a.answererId].username}
            updateAnswer={updateAnswer}
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
