import React from "react";
import GreetingContainer from "./NavBar/Greeting/GreetingContainer";
import { Route } from 'react-router-dom'
import LoginFormContainer from "./Session/LoginFormContainer";
import NavBar from "./NavBar/NavBar"

const App = () => (
  <div className="app">
    <NavBar />
    <Route path="/login" component={LoginFormContainer} />
  </div>
);

export default App;
