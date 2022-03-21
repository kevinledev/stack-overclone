import React from "react";
import { Link } from "react-router-dom";


class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchQuestion(this.props.question.id)
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