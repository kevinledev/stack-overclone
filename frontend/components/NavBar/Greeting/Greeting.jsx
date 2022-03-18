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
      <div className="session-buttons">
        <Link to={`/login`}>
          <button className="login-button">Log in</button>
        </Link>

        <Link to={`/signup`}>
          <button className="signup-button">Sign Up</button>
        </Link>
      </div>
    );

    return <div>{displayGreeting}</div>;
  }
}
