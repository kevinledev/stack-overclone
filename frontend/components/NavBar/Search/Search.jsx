import React from "react";


export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="search">

          <input className="search-input" type="text" placeholder="Search..."/>
          <div className="search-icon"></div>

      </div>
    )
  }
}
