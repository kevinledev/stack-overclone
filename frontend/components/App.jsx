import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from "./Session/LoginFormContainer";
import SignupFormContainer from "./Session/SignupFormContainer";
import NavBar from "./NavBar/NavBar";
import QuestionsIndexContainer from "./Questions/QuestionsIndexContainer";
import QuestionShowContainer from "./Questions/QuestionShowContainer";
import UserShowContainer from "./Users/UserShowContainer";
import UsersIndexContainer from "./Users/UsersIndexContainer";
import Sidebar from "./Sidebar/Sidebar";
import { withRouter } from "react-router-dom";

const App = () => (
  <div className="app">
    <header style={{ height: "50px" }}>
      <NavBar />
    </header>

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />

    <div className="main-container">
      <Switch>
        {/* render the sidebar on all pages except root  */}
        {/* <Route exact path="/" /> */}
        <Route path="/" component={Sidebar} />
      </Switch>

      <div className="react-rendered">
        <Switch>
          <Route path="/users/:userId" component={UserShowContainer} />
          <Route path="/users" component={UsersIndexContainer} />
          <Route
            exact
            path="/questions/:questionId"
            component={QuestionShowContainer}
          />
          <Route path="/questions" component={QuestionsIndexContainer} />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;
