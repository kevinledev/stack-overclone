import React from "react";
import QuestionsIndexItem from "./QuestionsIndexItem";

export default class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const { questions, deleteQuestion } = this.props;
    console.log(questions)

    return (
      <div>
        {questions.map(q => (<QuestionsIndexItem question={q} deleteQuestion={deleteQuestion}/>))}
      </div>
    )
  }
}
