import React from 'react';
import { Link } from "react-router-dom";

export default class QuestionsIndexItem extends React.Component {
  constructor(props){
    super(props)
  }


  render() {
    const {question, deleteQuestion} = this.props;

    return (
      <div>
        <div className="question-index-title">
          <Link to={`/questions/${question.id}`}>{question.title}</Link>
        </div>
        <div>{question.body}</div>
        <div>
          {question.asker.username} asked {question.created_at}
        </div>
      </div>
    );
  }
}