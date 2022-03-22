import React from "react";
import { Link } from "react-router-dom";

export default class QuestionForm extends React.Component {
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
      .formAction(this.state)
      .then(() => this.props.history.push("/questions"));
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    const { formType } = this.props;
    const formTitle =
      formType === "Ask question" ? "Ask a question" : "Edit Question";

    const formHeading =
      formType === "Ask question" ? (
        <div className="question-index-heading">
          Ask a question
        </div>
      ) : (
        <div className="question-index-heading">
          Edit Question
          <Link to={`/questions/new`}>
            <button className="ask-question">Ask Question</button>
          </Link>
        </div>
      );

    return (
      <div className="question-form">
        {formHeading}
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.updateTitle}
            />
          </label>
          <label>
            Body
            <textarea value={this.state.body} onChange={this.updateBody} />
          </label>
          <input type="submit" value={formType}></input>
        </form>
      </div>
    );
  }
}
