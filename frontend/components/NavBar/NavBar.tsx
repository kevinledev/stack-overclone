import React from "react";
import { Link } from "react-router-dom";
import GreetingContainer from "./Greeting/GreetingContainer";
import SearchBarContainer from "./SearchBar/SearchBarContainer";

const NavBar = () => {
  return (
    <div>
      <div className="nav-bar-container">
        <div className="gradient-box"></div>
        <div className="nav-items">
          <Link className={"link-to-home"} to={`/`}>
            <img src={window.logoTransparent} height="32px" alt="Logo"></img>
          </Link>
          <SearchBarContainer />
          <GreetingContainer />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
