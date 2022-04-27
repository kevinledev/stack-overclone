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
            to={`/users`}
            className="sidebar-users-link"
            activeClassName="sidebar-current-page"
          >
            Users
          </NavLink>
          <h1 className="public">TEAMS</h1>
          <div className="overclone-for-teams">
            <span>
              <b className="make-bold">Stack Overclone for Teams</b>
              <span className="grey-this">
                &nbsp;- Collaborate and share knowledge with a a private group.
              </span>
            </span>
            <img src={window.teamsfree}></img>
            <a
              target="_blank"
              href="https://stackoverflow.com/teams/create/free?utm_source=so-owned&utm_medium=side-bar&utm_campaign=campaign-38&utm_content=cta"
            >
              <button className="link-to-msteams">Create a free Team</button>
            </a>
            <span className="whatisteams">
              <a
                target="_blank"
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
