import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from "./Session/LoginFormContainer";
import SignupFormContainer from "./Session/SignupFormContainer";
import NavBar from "./NavBar/NavBar";
import QuestionsIndexContainer from "./Questions/QuestionsIndexContainer";
import QuestionShowContainer from "./Questions/QuestionShowContainer";
import UserShowContainer from "./Users/UserShowContainer";
import Sidebar from "./Sidebar/Sidebar";

const App = () => (
  <div className="app">
    <header>
      <div className="separator" style={{ height: "50px" }}>
        <NavBar />
      </div>
    </header>
    < Sidebar />
    <Switch>
      <Route path="/users/:userId" component={UserShowContainer} />
      <Route exact path="/questions/:questionId" component={QuestionShowContainer} />
      <Route exact path="/questions" component={QuestionsIndexContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
