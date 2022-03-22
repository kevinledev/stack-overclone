import React from "react";

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
      <div>
        <div>user id:{user.id}</div>
        <div>
          Display name:
          {user.username}
        </div>
      </div>
    ) : (
      <></>
    )

    return (
      <div>
        {userDisplay}
      </div>
    );
  }
}
