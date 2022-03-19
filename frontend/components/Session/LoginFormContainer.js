import { connect } from "react-redux";
import { login, clearSessionErrors } from "../../actions/session_actions";
import Login from "./LoginForm";

const mapStateToProps = (state) => {
  return {
    currentUser: Boolean(state.session.currentUserId),
    errors: state.errors.auth,
    formType: "login",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
