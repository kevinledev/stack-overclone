import React from "react";
import { Link } from "react-router-dom";

export default class EditQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState(this.props.question);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateQuestion(this.state).then(() => window.location.reload());
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    const { question } = this.props;

    if (!question) return null;
    return (
      <div className="edit-question">
        <form onSubmit={this.handleSubmit}>
          <div className="edit-question-form-container">
            <div className="edit-question-form">
              <label className="eq-title-container">
                <div className="eq-title-text">
                  <h1 className="eq-input-headings">Title</h1>
                </div>

                  <input
                    type="text"
                    value={this.state.title}
                    onChange={this.updateTitle}className="eq-title-input"
                  />

              </label>
              <label className="eq-body-container">
                <h1 className="eq-input-headings">Body</h1>
                <textarea
                  spellcheck="false"
                  value={this.state.body}
                  // value=""
                  onChange={this.updateBody}
                />
                <div className="question-edit-preview">
                  <h1 className="eq-input-headings">Preview</h1>
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
                  onClick={this.toggleEditQuestion}
                >
                  Cancel
                </button>
              </div>
              <div className="asker-details">
                <h1>asked&nbsp;on {question.created_at.slice(0, 10)}</h1>
                <Link to={`/users/${question.asker.id}`}>
                  {question.asker.username}
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
