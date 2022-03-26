import React from "react";
import { Link } from "react-router-dom";

export default class EditAnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.answer;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateAnswer(this.state).then(() => window.location.reload());
  }

  render() {
    if (!this.props) return null; // does it take time for props to pass through
    const { answer, answererUsername } = this.props;

    return (
      <div className="edit-question">
        <form onSubmit={this.handleSubmit}>
          <div className="edit-question-form-container">
            <div className="edit-question-form">
              <label className="edita-body-container">
                <div className="ea-input-headings">Editing answer</div>
                <textarea
                  spellcheck="false"
                  value={this.state.body}
                  onChange={this.updateBody}
                />
                <div className="question-edit-preview">
                  {/* <div className="ea-input-headings">Preview</div> */}
                  <h2>{this.state.body}</h2>
                </div>
              </label>
            </div>
            <div className="question-show-sub-body">
              <div className="question-show-options">
                <input
                  type="submit"
                  className="save-edits"
                  value="Save edits"
                ></input>
                <button
                  className="question-show-delete-button"
                  onClick={this.toggleEditAnswer}
                >
                  Cancel
                </button>
              </div>
              <div className="answer-details">
                <div className="answer-timestamp">
                  answered&nbsp;{answer.createdAt.slice(0, 10)}&nbsp;at&nbsp;
                  {answer.createdAt.slice(11, 16)}
                </div>
                <Link to={`/users/${answer.answererId}`}>
                  {answererUsername}
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
