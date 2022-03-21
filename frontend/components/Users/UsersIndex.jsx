import React from "react";

export default class UsersIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {

  //   this.props.fetchUsers();
  // }

  render() {
    const { users } = this.props;


    return (
      <div className="users-index">
        hello
        {/* <h1 className="">Users</h1>
        {users.map((u) => (
          <UsersIndexItem user={u}/>
        ))} */}
      </div>
    );
  }
}
