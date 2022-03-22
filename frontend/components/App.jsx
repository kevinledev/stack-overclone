import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginFormContainer from "./Session/LoginFormContainer";
import SignupFormContainer from "./Session/SignupFormContainer";
import NavBar from "./NavBar/NavBar";
import QuestionsIndexContainer from "./Questions/QuestionsIndexContainer";
import QuestionShowContainer from "./Questions/QuestionShowContainer";
import UserShowContainer from "./Users/UserShowContainer";
import UsersIndexContainer from "./Users/UsersIndexContainer";
import Sidebar from "./Sidebar/Sidebar";
import CreateQuestionContainer from "./Questions/CreateQuestionContainer";
import Homepage from "./Homepage/Homepage";

const App = () => (
  <div className="app">
    <header style={{ height: "50px" }}>
      <NavBar />
    </header>

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute
      exact
      path="/questions/new"
      component={CreateQuestionContainer}
    />

    <div className="main-container">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" />
        <Route exact path="/signup" />
        <Route exact path="/questions/new" />
        <Route path="/" component={Sidebar} />
      </Switch>

      <div className="react-rendered">
        <Switch>
          <Route exact path="/" />
          <Route exact path="/users/:userId" component={UserShowContainer} />
          <Route exact path="/users" component={UsersIndexContainer} />
          <Route
            exact
            path="/questions/:questionId"
            component={QuestionShowContainer}
          />
          <Route exact path="/questions" component={QuestionsIndexContainer} />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;
