import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions.js"

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => this.props.history.push("/questions"));
    //                                  ^^ fix this to /questions later
    if (this.props.errors) {
      this.setState({
        username: "",
        password: "",
      });
    }
  }

  loginDemo(e) {
    e.preventDefault();
    this.setState({ username: "Clone37", password: "09f84231f90j30irvoiqrvjwh3209hd#@!@#F!@dhuiw" });
    this.props
      .processForm({
        username: "Clone37",
        password: "09f84231f90j30irvoiqrvjwh3209hd#@!@#F!@dhuiw",
      })
      .then(() => this.props.history.push("/questions"));
  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  render() {
    const { errors } = this.props;

    return (
      <div className="login-page">
        <div className="login-container">
          <Link to={`/`}>
            <img width="35px" src={window.loginLogo}></img>
          </Link>
          <button className="guest-login" onClick={this.loginDemo}>
            &ensp;Log in as guest&ensp;
          </button>
          <form>
            <div className="login-inputs">
              <div className="login-errors">{errors}</div>
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
            <span>
              Don't have an account?
              <Link className={"login-to-signup-link"} to={`/signup`}>
                Sign up
              </Link>
            </span>
            <span>
              Are you an employer?
              <a
                target="_blank"
                className="login-to-signup-link"
                href="https://www.linkedin.com/in/kevinledev/"
              >
                Let's connect
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
