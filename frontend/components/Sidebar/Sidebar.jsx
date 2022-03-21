import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <div className="home">Home</div>
        </Link>
        <h1 className="public">PUBLIC</h1>
        <div className="public-links-container">
          <Link to={`/questions`} className="sidebar-questions-link">
            <img src={window.globe}></img>
            &nbsp;&nbsp;Questions
          </Link>
          <Link to={`/users`} className="sidebar-users-link">
            Users
          </Link>
        </div>
      </div>
    );
  }
}
