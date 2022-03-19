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

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  render() {
    const { errors } = this.props;
    const firstError = errors[0];
    console.log(this.props.errors);
    return (
      <div className="signup-page">
        <div className="join-us-container">
          <div className="join-text">Join the Stack Overclone community</div>
          <ul>
            <li>
              <img src={window.qBubble}></img>
              <span>Get unstuck - ask a question</span>
            </li>
            <li>
              <img src={window.voteIcon}></img>
              <span>Unlock new privileges like voting and commenting</span>
            </li>
            <li>
              <img src={window.tagIcon}></img>
              <span>Save your favorite tags, filters, and jobs</span>
            </li>
            <li>
              <img src={window.trophyIcon}></img>
              <span>Earn reputation and badges</span>
            </li>
            <div className="get-so-for-teams">
              Collaborate and share knowledge with a private group for FREE. Get
              Stack Overclone for Teams free for up to 50 clones.
            </div>
          </ul>
        </div>
        <div className="signup-container">
          <form>
            <div className="signup-inputs">
              <div className="login-errors">
                {/* {errors.map((er) => (
                  <div>{er}</div>
                ))} */}
                {errors[0]}
              </div>

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
            <div>
              <span>Already have an account?</span>
              <Link className={"login-to-signup-link"} to={`/login`}>
                Log in
              </Link>
            </div>
            <div>
              <span>Are you an employer?</span>
              <Link className={"login-to-signup-link"} to={`/login`}>
                Let's connect
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
