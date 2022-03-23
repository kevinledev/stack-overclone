import React from "react";

export default class EditQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.question;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .updateQuestion(this.state)
      .then(() =>
        this.props.history.push(`/questions/${this.props.question.id})`)
      );
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
      <div className="main-container">
        <div className="edit-question">
          <form onSubmit={this.handleSubmit}>
            <div className="edit-question-form-container">
              <div className="edit-question-form">
                <label className="eq-title-container">
                  <div className="eq-title-text">
                    <h1>Title</h1>
                  </div>
                  <div className="eq-title-input">
                    <input
                      type="text"
                      value={this.state.title}
                      onChange={this.updateTitle}
                    />
                  </div>
                </label>
                <label className="eq-body-container">
                  <div>
                    <h1>Body</h1>
                  </div>
                  <textarea
                    value={this.state.body}
                    onChange={this.updateBody}
                  />
                </label>
              </div>
              <input
                className="save-edits"
                type="submit"
                value="Save edits"
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
