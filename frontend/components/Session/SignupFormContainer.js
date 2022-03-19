import { connect } from "react-redux";
import { signup, clearSessionErrors } from "../../actions/session_actions";
import SignupForm from "./SignupForm";

const mapStateToProps = state => {
  return {
    errors: state.errors.auth,
    formType: "signup",
  };
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)