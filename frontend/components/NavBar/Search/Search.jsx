import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="search">
        <img src={window.searchIcon}></img>
        <input className="search-input" type="text" placeholder="Search..." />
        <div className="search-icon"></div>
      </div>
    );
  }
}
