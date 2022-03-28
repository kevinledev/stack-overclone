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
    });
  }

  componentDidUpdate(prevProps) {
    // if (this.state.voteScore === undefined && this.props.voteScore !== undefined) {
    //   const currentUserVote = this.props.currentUserVote
    //     ? this.props.currentUserVote
    //     : 0;
    //   this.setState({
    //     voteScore: this.props.voteScore - currentUserVote,
    //     currentUserVote,
    //   });
    // }

    if (prevProps !== this.props) {
      this.setState({
        voteScore: this.props.question.voteScore,
        currentUserVote: this.props.currentUserVote,
      });
    }
  }

  handleVote(val) {
    let currentQuestionId = this.props.question.id;

    if (val === this.state.currentUserVote) {
      this.props.unvote(currentQuestionId);
      this.setState({ currentUserVote: 0 });
    } else if (val === 1) {
      this.props.upvote(currentQuestionId);
      this.setState({ currentUserVote: 1 });
    } else {
      this.props.downvote(currentQuestionId);
      this.setState({ currentUserVote: -1 });
    }
    window.location.reload();
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
        {this.state.currentUserVote}
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