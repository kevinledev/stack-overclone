import React from "react";
import { Link } from "react-router-dom";

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { username, currentUser, logout } = this.props;

    const displayGreeting = currentUser ? (
      <div>
        <h2>Welcome {username}!</h2>
        <button onClick={logout}>Logout</button>
      </div>
    ) : (
      <div>
        <button>
          <Link to={`/login`}>Log In</Link>
        </button>
        <button>
          <Link to={`/signup`} >Sign Up</Link>
        </button>
      </div>
    );

    return <div>{displayGreeting}</div>;
  }
}
