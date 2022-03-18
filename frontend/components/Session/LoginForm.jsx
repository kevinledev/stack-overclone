import React from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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

  loginDemo() {

  }

  render() {
    return (
      <div className="login-page">
        <div className="login-container">
          <img width="35px" src={window.loginLogo}></img>
          <button className="guest-login" onClick={this.loginDemo}>
            &ensp;Log in as guest&ensp;
          </button>
          <form>
            <div className="login-inputs">
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
              <div className="password-input">
                <label>Password</label>
                <div>
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInput("password")}
                  />
                </div>
              </div>
              <button onClick={this.handleSubmit}>Log in</button>
            </div>
          </form>
          <div className="login-other-links">
            <span>Don't have an account? </span>
            <Link className={"login-to-signup-link"} to={`/signup`}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
