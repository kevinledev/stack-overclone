import React from "react";
import GreetingContainer from "./Greeting/GreetingContainer";
import { Link } from "react-router-dom";
import SearchBarContainer from "./SearchBar/SearchBarContainer";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="nav-bar-container">
          <div className="gradient-box"></div>
          <div className="nav-items">
            <Link className={"link-to-home"} to={`/`}>
              <img src={window.logoTransparent} height="32px"></img>
            </Link>
            <SearchBarContainer />
            <GreetingContainer />
          </div>
        </div>
      </div>
    );
  }
}
