import React from "react";

export default class AnswerItemVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightVote: this.props.highlightVote,
      voteScore: this.props.voteScore,
    };
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    this.setState({
      highlightVote: this.props.highlightVote,
      voteScore: this.props.voteScore,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        voteScore: this.props.voteScore,
        highlightVote: this.props.highlightVote,
      });
    }
  }

  handleVote(val) {
    if (!this.props.currentUserId) return;
    let currentQuestionId = this.props.answer.id;
    if (val === this.state.highlightVote) {
      if (val === 1) {
        this.props.unvote(currentQuestionId);
        this.setState({
          highlightVote: 0,
          voteScore: this.state.voteScore - 1,
        });
      } else {
        this.props.unvote(currentQuestionId);
        this.setState({
          highlightVote: 0,
          voteScore: this.state.voteScore + 1,
        });
      }
    } else if (val === -1 * this.state.highlightVote) {
      if (val === 1) {
        this.props.upvote(currentQuestionId);
        this.setState({
          highlightVote: 1,
          voteScore: this.state.voteScore + 2,
        });
      } else {
        this.props.downvote(currentQuestionId);
        this.setState({
          highlightVote: -1,
          voteScore: this.state.voteScore - 2,
        });
      }
    } else if (val === 1) {
      this.props.upvote(currentQuestionId).then();
      this.setState({
        highlightVote: 1,
        voteScore: this.state.voteScore + 1,
      });
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
      <div className="answer-show-body-left">
        <div
          className={
            this.state.highlightVote === 1
              ? "uparrow_activated"
              : !this.props.currentUserId
              ? "uparrow_loggedout"
              : "uparrow"
          }
          onClick={() => this.handleVote(1)}
        ></div>
        {this.state.voteScore}
        <div
          className={
            this.state.highlightVote === -1
              ? "downarrow_activated"
              : !this.props.currentUserId
              ? "downarrow_loggedout"
              : "downarrow"
          }
          onClick={() => this.handleVote(-1)}
        ></div>
      </div>
    );
  }
}
