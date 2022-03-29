import React from "react";
import UsersIndexItem from "./UsersIndexItem"

export default class UsersIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchUsers();
    window.scrollTo(0, 0);
  }

  render() {
    const { users } = this.props;
    return (
      <div className="main-container">
        <div className="users-index">
          <h1 className="users-index-heading">
            Users
          </h1>
          <h2>{users.length} users</h2>
          <div className="users-index-item-wrapper">
            {users.map((u) => (
              <UsersIndexItem user={u} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
