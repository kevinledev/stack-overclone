import React from "react";
import AnswerItem from "../Answers/AnswerItem";
import QuestionsIndexItem from "../Questions/QuestionsIndexItem";

export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }


  render() {
    const { user } = this.props;

    const userDisplay = user ? (
      <div className="user-show-container">
        <div className="user-show-heading">
          <div className="user-show-username">
            {user.username}
          </div>
          <div className="user-show-id">id: {user.id}</div>
        </div>
      </div>
    ) : (
      null
    );

    return <div className="main-container">{userDisplay}</div>;
  }
}
