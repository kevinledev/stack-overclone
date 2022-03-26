import React from "react";
import { Link } from "react-router-dom";

export default class CreateAnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.answer;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  // componentDidMount(){
  //   this.setState(this.props.answer)
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postAnswer(this.state).then(() => window.location.reload());
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    const { answer } = this.props;

    if (!answer) return null;
    return (
      <div className="edit-answer">
        <form onSubmit={this.handleSubmit} className="edit-answer-form">
          <label className="ea-body-container">
            <h1 className="your-answer-heading">Your Answer</h1>
            <textarea
              spellcheck="false"
              // value=""
              onChange={this.updateBody}
            />
          </label>

          <div className="answer-show-options">
            <input
              type="submit"
              className="post-your-answer"
              value="Post Your Answer"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
