import React from "react";
import GreetingContainer from "./NavBar/Greeting/GreetingContainer";
import { Route } from 'react-router-dom'
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from "./Session/LoginFormContainer";
import SignupFormContainer from "./Session/SignupFormContainer";
import NavBar from "./NavBar/NavBar"


const App = () => (
  <div className="app">
    <NavBar />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    {/* <Route path="/users/:userId" component={UserShowContainer} /> */}
  </div>
);

export default App;
