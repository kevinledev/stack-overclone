import React from "react";
import { Link, NavLink } from "react-router-dom";

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <Link to={`/`}>
          <div className="home">Home</div>
        </Link>
        <h1 className="public">PUBLIC</h1>
        <div className="public-links-container">
          <NavLink
            to={`/questions`}
            className="sidebar-questions-link"
            activeClassName="sidebar-current-page"
          >
            <img src={window.globe}></img>
            &nbsp;&nbsp;Questions
          </NavLink>
          <NavLink
            to={`/testpage`}
            className="sidebar-questions-link"
            activeClassName="sidebar-current-page"
          >
            &nbsp;&nbsp;test
          </NavLink>
          <Link
            to={`/users`}
            className="sidebar-users-link"
            activeClassName="sidebar-current-page"
          >
            Users
          </Link>
          <h1 className="public">TEAMS</h1>
          <div className="overclone-for-teams">
            <span>
              <b className="make-bold">Stack Overclone for Teams</b>
              <span className="grey-this">
                - Collaborate and share knowledge with a a private group.
              </span>
            </span>
            <img src={window.teamsfree}></img>
            <a href="https://stackoverflow.com/teams/create/free?utm_source=so-owned&utm_medium=side-bar&utm_campaign=campaign-38&utm_content=cta"></a>
            <div className="link-to-msteams">Create a free Team</div>
            <span className="whatisteams">
              <a
                href="https://stackoverflow.co/teams/"
                className="whatisteamslink"
              >
                What is Teams?
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
