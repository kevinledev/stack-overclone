import React from 'react';
import { Link } from 'react-router-dom';
import QuestionsIndexItem from '../Questions/QuestionsIndexItem';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props)

    this.state = { }
  }

  componentDidMount() {
    if (this.props.searchField) {
      this.props.searchQuestions(this.props.searchField).then(() => 
      this.setState({ questions:this.props.questions }))
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchField && this.props.searchField !== prevProps.searchField) {
      this.props
        .searchQuestions(this.props.searchField)
        .then(() => this.setState({ questions: this.props.questions }));
    }
  }


  render() {

    const {questions, users} = this.props

    if (!this.state.questions) {
      return null;
    }   

    const amtQuestions =
      questions.length === 1 ? (
        <h2>1 question</h2>
      ) : (
        <h2>{questions.length} questions</h2>
      );

    const searchResultsDisplay = questions.length ? (
      <div className="question-index">
        <div className="question-index-heading">
          Search Results
          <Link to={`/ask-question`}>
            <button className="ask-question">Ask Question</button>
          </Link>
        </div>
        {amtQuestions}
        <div className="search-index-wrapper">
          {questions.map((q) => (
            <QuestionsIndexItem question={q} asker={users[q.askerId]} />
          ))}
        </div>
      </div>
    ) : (
      <div className="question-index">
        <div className="question-index-heading">
          Search Results
          <Link to={`/ask-question`}>
            <button className="ask-question">Ask Question</button>
          </Link>
        </div>
        <h2>No questions match search</h2>
        <div style={{width:"777px"}}></div>
      </div>
    );
    return <div className="main-container">{searchResultsDisplay}</div>;
  }
}