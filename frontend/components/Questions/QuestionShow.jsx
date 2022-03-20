import React from "react";
import { Link } from "react-router-dom";


class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { question } = this.props;
    return (
      <div>
        {question.title}
        {question.body}
      </div>
    );
  }
}
export default QuestionShow;