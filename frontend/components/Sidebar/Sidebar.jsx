import React from 'react';
import { Link } from "react-router-dom";

export default class Sidebar extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <Link to={`/`}>Home</Link>
        <Link to={`/questions`}>Questions</Link>
        {/* <Link to={`/users`}>Users</Link> */}
      </div>
    );
  }
}