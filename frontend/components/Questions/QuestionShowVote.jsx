import React from "react";
import { render } from "react-dom";

export default class QuestionShowVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightVote: this.props.highlightVote,
    };
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    this.setState({
      highlightVote: this.props.highlightVote,
      voteScore: this.props.voteScore,
    });
  }

  handleVote(val) {
    let currentQuestionId = this.props.question.id;
    if (val === this.state.highlightVote) {
      // clicking upvote while already upvoted => destroy vote
      if (val === 1) {
        this.props.unvote(currentQuestionId);
        this.setState({
          highlightVote: 0,
          voteScore: this.state.voteScore - 1,
        });
     
      // clicking downvote while already downvoted => destroy vote
      } else {
        this.props.unvote(currentQuestionId);
        this.setState({
          highlightVote: 0,
          voteScore: this.state.voteScore + 1,
        });
      }
    
    // votes alternating between upvote/downvote
    } else if (val === -1 * this.state.highlightVote) {
      // hitting an upvote from a downvote
      if (val === 1) {
        this.props.upvote(currentQuestionId);
        this.setState({
          highlightVote: 1,
          voteScore: this.state.voteScore + 2,
        });
      } else {
        //hitting a downvote from an upvote
        this.props.downvote(currentQuestionId);
        this.setState({
          highlightVote: -1,
          voteScore: this.state.voteScore - 2,
        });
      }

      //upvoting while not voted
    } else if (val === 1) {
      this.props.upvote(currentQuestionId).then();
      this.setState({
        highlightVote: 1,
        voteScore: this.state.voteScore + 1,
      });

      //downvoting while not downvoted
    } else {
      this.props.downvote(currentQuestionId);
      this.setState({
        highlightVote: -1,
        voteScore: this.state.voteScore - 1,
      });
    }
  }

  render() {
    return (
      <div className="question-show-body-left">
        <div
          className={
            this.state.highlightVote === 1 ? "uparrow_activated" : "uparrow"
          }
          onClick={() => this.handleVote(1)}
        ></div>
        {this.state.voteScore}
        <div
          className={
            this.state.highlightVote === -1
              ? "downarrow_activated"
              : "downarrow"
          }
          onClick={() => this.handleVote(-1)}
        ></div>
      </div>
    );
  }
}
