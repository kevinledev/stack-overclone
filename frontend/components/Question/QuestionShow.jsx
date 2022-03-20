import React from "react";
import { Link } from "react-router-dom";

export default class QuestionShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.question.id)
  }

  render() {
    const { question, deleteQuestion } = this.props;
    return(
      <div>
        <div>
          {question.title}
        </div>
        <div>
          {question.body}
        </div>
      </div>
    )
  }
}