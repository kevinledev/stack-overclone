import React from "react";
import { Link } from "react-router-dom";

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
          <Link to={`/questions`} className="sidebar-questions-link">
            <img src={window.globe}></img>
            &nbsp;&nbsp;Questions
          </Link>
          <Link to={`/users`} className="sidebar-users-link">
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
