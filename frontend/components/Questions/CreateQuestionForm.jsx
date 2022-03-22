import React from "react";
import { Link } from "react-router-dom";

export default class CreateQuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.question;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .postQuestion(this.state)
      .then(() => this.props.history.push("/questions"));
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    return (
      <div className="create-question">
        <div className="create-question-heading">
          Ask a public question
          <Link to={`/questions`}>
            <button className="back-to-questions">Back to questions</button>
          </Link>
        </div>

        <div className="form-w-instructions">
          <form onSubmit={this.handleSubmit}>
            <div className="create-question-form-container">
              <div className="create-question-form">
                <label className="cq-title-container">
                  <div className="cq-title-text">
                    <h1>Title</h1>
                    <h2>
                      Be specific and imagine you're asking a question to
                      another person
                    </h2>
                  </div>
                  <div className="cq-title-input">
                    <input
                      type="text"
                      value={this.state.title}
                      onChange={this.updateTitle}
                    />
                  </div>
                </label>
                <label className="cq-body-container">
                  <div>
                    <h1>Body</h1>
                    <h2>
                      Include all the information someone would need to answer
                      your question
                    </h2>
                  </div>
                  <textarea
                    value={this.state.body}
                    onChange={this.updateBody}
                  />
                </label>
              </div>
              <input
                className="post-your-question"
                type="submit"
                value="Post your question"
              ></input>
            </div>
          </form>
          <div className="cq-instructions">
            <div className="cq-instructions-heading">
              Step 1. Draft your question
            </div>
            <div className="cq-instructions-steps">
              <p>
                The community is here to help you with specific coding,
                algorithm, or language problems.
              </p>
              <p>Avoid asking opinion-based questions</p>
              <div className="cq-step-list">
                <h1>
                  1.<h2>Summarize the problem</h2>
                </h1>
                <h1>
                  2.<h2>Describe what you've tried</h2>
                </h1>
                <h1>
                  3.<h2>Show some code</h2>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
