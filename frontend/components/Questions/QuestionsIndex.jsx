import React from "react";
import QuestionsIndexItem from "./QuestionsIndexItem";

export default class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  // componentDidUpdate(){
  //   this.props.fetchQuestions();
  // }


  render() {
    const { questions, deleteQuestion } = this.props;
    const questionsSortedNew = questions.reverse();

    return (
      <div className="question-index">
        <h1 className="">All Questions</h1>
        <h2>{questions.length} questions</h2>
        {questionsSortedNew.map((q) => (
          <QuestionsIndexItem question={q} deleteQuestion={deleteQuestion} />
        ))}
      </div>
    );
  }
}
