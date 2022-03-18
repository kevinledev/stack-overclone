import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions.js";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => this.props.history.push("/"));
    //                                  ^^ fix this to /questions later
  }

  render() {
    return (
      <div className="signup-page">
        <div className="signup-container">
          {/* <Link to={`/`}>
            <img width="35px" src={window.loginLogo}></img>
          </Link> */}
          <form>
            <div className="signup-inputs">
              <div className="username-input">
                <label>Username </label>
                <div>
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleInput("username")}
                  />
                </div>
              </div>
              <div className="email-input">
                <label>Email </label>
                <div>
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.handleInput("email")}
                  />
                </div>
              </div>
              <div className="password-input">
                <label>Password</label>
                <div>
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInput("password")}
                  />
                </div>
                <div className={"password-rules"}>
                  Passwords must contain at least 6 characters.
                </div>
              </div>
              <button onClick={this.handleSubmit}>Sign up</button>
              <div className={"disclaimer"}>
                By clicking “Sign up”, you agree to our terms of service,
                privacy policy and cookie policy
              </div>
              {/* I’m going to be straight up with
                you! in my own humble opinion without being sentimental of
                course, without offending anyone who thinks differently from my
                own point of view,but also by looking into this matter in
                distinctive perspective ,i would like to say I have nothing to
                say */}
            </div>
          </form>
          <div className="login-other-links">
            <span>Already have an account? </span>
            <Link className={"login-to-signup-link"} to={`/login`}>
              Log in
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
