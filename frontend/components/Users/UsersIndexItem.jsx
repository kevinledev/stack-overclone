import React from "react";
import { Link } from "react-router-dom";

export default class UsersIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { user } = this.props;


    return (
      <div>
        <div className="users-index-title">
          <Link to={`/users/${user.id}`}>{user.username}</Link>
        </div>
      </div>
    );
  }
}
