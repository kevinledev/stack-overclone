import React from "react";
import { render } from "react-dom";

export default class QuestionShowVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserVote: this.props.currentUserVote,
    };
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentUserVote: this.props.currentUserVote,
      voteScore: this.props.voteScore,
    });
  }

  handleVote(val) {
    let currentQuestionId = this.props.question.id;
    if (val === this.state.currentUserVote) {
      if (val === 1) {
        this.props.unvote(currentQuestionId);
        this.setState({
          currentUserVote: 0,
          voteScore: this.state.voteScore - 1
        });
      } else {
        this.props.unvote(currentQuestionId);
        this.setState({
          currentUserVote: 0,
          voteScore: this.state.voteScore + 1
        });
      }
    } else if (val === -1 * this.state.currentUserVote){
      if (val === 1) { // hitting an upvote from a downvote
        this.props.upvote(currentQuestionId);
        this.setState({
          currentUserVote: 1,
          voteScore: this.state.voteScore + 2,
        });
      } else { //hitting a downvote from an upvote
        this.props.downvote(currentQuestionId);
        this.setState({
          currentUserVote: -1,
          voteScore: this.state.voteScore - 2,
        });
      }
    } else if (val === 1) {
      this.props.upvote(currentQuestionId).then();
      this.setState({
        currentUserVote: 1,
        voteScore: this.state.voteScore + 1,
      });
    } else {
      this.props.downvote(currentQuestionId);
      this.setState({
        currentUserVote: -1,
        voteScore: this.state.voteScore - 1,
      });
    }
  }

  render() {
    return (
      <div className="question-show-body-left">
        <div
          className={
            this.state.currentUserVote === 1 ? "uparrow_activated" : "uparrow"
          }
          onClick={() => this.handleVote(1)}
        ></div>
        {this.state.voteScore}
        <div
          className={
            this.state.currentUserVote === -1
              ? "downarrow_activated"
              : "downarrow"
          }
          onClick={() => this.handleVote(-1)}
        ></div>
      </div>
    );
  }
}
