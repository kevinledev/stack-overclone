import React from "react";

export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <div>user id:{user.id}</div>
        <div>
          Display name:
          {user.username}
        </div>
      </div>
    );
  }
}
