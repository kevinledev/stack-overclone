import React from "react";
import { Link } from "react-router-dom";

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { username, id, currentUser, logout } = this.props;

    const displayGreeting = currentUser ? (
      <div className="greeting-container">
          <Link to={`/users/${id}`} style={{textDecoration:"none"}}>
        <div className="my-profile-container">
            <p className="my-profile-link">My Profile</p>
        </div>
          </Link>
        <button className="signup-button" onClick={logout}>
          Logout
        </button>
      </div>
    ) : (
      <div className="session-buttons">
        <Link to={`/login`}>
          <button className="login-button">Log in</button>
        </Link>

        <Link to={`/signup`}>
          <button className="signup-button">Sign up</button>
        </Link>
      </div>
    );

    return <div>{displayGreeting}</div>;
  }
}
