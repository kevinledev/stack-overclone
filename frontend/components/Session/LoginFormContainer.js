import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import Login from "./LoginForm";

const mapStateToProps = (state) => {
  return {
    currentUser: Boolean(state.session.currentUserId),
    errors: state.errors.session,
    formType: "login",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
