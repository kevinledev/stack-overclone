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
              <Link to={`/users`} className="footer-userslink">
                Users
              </Link>
            </ul>
          </div>
        </div>
        <div className="dev-links-container">
          <div className="dev-links">
            <h1>DEVELOPER</h1>
            <ul>
              <a target="_blank" href="https://www.linkedin.com/in/kevinledev/">
                LinkedIn
              </a>
              <a
                target="_blank"
                href="https://github.com/kevinledev"
                className="footer-ghlink"
              >
                GitHub
              </a>
            </ul>
          </div>
          <div className="copyright">
            &copy; 2022 Stack Overclone. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
