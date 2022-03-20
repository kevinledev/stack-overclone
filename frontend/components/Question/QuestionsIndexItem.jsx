import React from 'react';

export default class QuestionsIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const {question, deleteQuestion} = this.props;

    return (
      <div>
        <div>{question.title}</div>
        <div>{question.body}</div>
      </div>
    );
  }
}