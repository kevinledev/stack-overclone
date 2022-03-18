import React from "react";
import GreetingContainer from "./Greeting/GreetingContainer";
import Search from "./Search/Search";

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
            <img src={window.logoTransparent} height="32px"></img>
            <Search />
            <GreetingContainer />
          </div>
        </div>
      </div>
    );
  }
}
