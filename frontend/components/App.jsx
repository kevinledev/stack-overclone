import React from "react";
import GreetingContainer from "./NavBar/Greeting/GreetingContainer";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from "./Session/LoginFormContainer";
import SignupFormContainer from "./Session/SignupFormContainer";
import NavBar from "./NavBar/NavBar";
import QuestionsIndexContainer from "./Question/QuestionsIndexContainer";
import QuestionShowContainer from "./Question/QuestionShowContainer";

const App = () => (
  <div className="app">
    <NavBar />
    <div className="separator" style={{ height: "50px" }}></div>

    <Switch>
      <Route exact path="/questions" component={QuestionsIndexContainer} />
      <Route
        exact
        path="/questions/:questionId"
        component={QuestionShowContainer}
      />
      {/* <Route path="/users/:userId" component={UserShowContainer} /> */}
      {/* <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    </Switch>
  </div>
);

export default App;
