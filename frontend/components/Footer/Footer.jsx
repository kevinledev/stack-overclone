import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footercenter">
        <div className="footer-left">
          <Link to={`/`}>
            <img width="35px" src={window.loginLogo}></img>
          </Link>
          <div className="main-footer-links">
            <div className="stackoverclone-link">
              <Link to={`/`}>STACK OVERCLONE</Link>
            </div>
            <ul>
              <Link to={`/questions`}>Questions</Link>
              <Link to={`/users`} className="footer-userslink">Users</Link>
            </ul>
          </div>
        </div>
        <div className="dev-links-container">
          <div className="dev-links">
            <h1>DEVELOPER</h1>
            <ul>
              <a>LinkedIn</a>
              <a className="footer-ghlink">Github</a>
            </ul>
          </div>
          <div className="copyright">
            &copy; 2022, Kevin Le. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
