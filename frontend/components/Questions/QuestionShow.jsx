import React from "react";
import { Link } from "react-router-dom";


export default class QuestionShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    debugger
    this.props.fetchQuestion(this.props.match.params.id)
  }

  render() {
    const { question, deleteQuestion } = this.props;
    return(
      <div>
        <Link to={`/questions`}>Back to All Questions</Link>
        <div>
          {question.title}
        </div>
        <div>
          {question.body}
        </div>
        <div>{question.created_at}</div>
      </div>
    )
  }
}