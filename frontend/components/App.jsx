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
import PersonalLinks from "./PersonalLinks/PersonalLinks";
import SearchResults from "./Search/SearchResults";
import SearchResultsContainer from "./Search/SearchResultsContainer";
import Footer from "./Footer/Footer";

const App = () => (
  <div className="app">
    <header style={{ height: "50px" }}>
      <NavBar />
    </header>

    <div className="app-block">
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      {/* testing  */}
      <Route exact path="/testpage" component={Sidebar} />

      <Route exact path="/" component={Homepage} />
      <Route exact path="/search" component={Sidebar} />
      <Route exact path="/users" component={Sidebar} />
      <Route exact path="/questions" component={Sidebar} />
      <Route exact path="/questions/:questionId" component={Sidebar} />
      <Route exact path="/users/:userId" component={Sidebar} />

      {/* Routes to User components */}
      <Route exact path="/users/:userId" component={UserShowContainer} />
      <Route exact path="/users" component={UsersIndexContainer} />

      {/* Routes to Question components */}
      <Route
        exact
        path="/questions/:questionId"
        component={QuestionShowContainer}
      />
      <Route exact path="/questions" component={QuestionsIndexContainer} />
      <ProtectedRoute
        exact
        path="/ask-question"
        component={CreateQuestionContainer}
      />

      <Route exact path="/search" component={SearchResultsContainer} />

      <Route exact path="/questions" component={PersonalLinks} />
      <Route exact path="/search" component={PersonalLinks} />
      <Route exact path="/users" component={PersonalLinks} />
      <Route exact path="/questions/:questionId" component={PersonalLinks} />
      <Route exact path="/users/:userId" component={PersonalLinks} />
    </div>
      <Route exact path="/" component={Footer} />
      <Route exact path="/search" component={Footer} />
      <Route exact path="/users" component={Footer} />
      <Route exact path="/questions" component={Footer} />
      <Route exact path="/questions/:questionId" component={Footer} />
      <Route exact path="/users/:userId" component={Footer} />
  </div>
);

export default App;
