import React from "react";
import { withRouter } from "react-router-dom";
// import { Link } from "react-router-dom";


class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  render() {
    const { question } = this.props;

    const questionDisplay = question ? (
      <div>
        {question.title}
        {question.body}
      </div> 
    ) : (
      <></>
    )

    return (
      <div>
        {questionDisplay}
      </div>
    )
  }
}
export default (QuestionShow);