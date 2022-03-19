import { connect } from "react-redux";
import { logout } from "../../../actions/session_actions"; // import the thunk action creator
import Greeting from "./Greeting";

const mapStateToProps = (state) => {
  if (state.session.currentUserId) {
    return {
      username: state.entities.users[state.session.currentUserId].username,
      id: state.session.currentUserId,
      currentUser: Boolean(state.session.currentUserId),
    };
  } else {
    return {};
  }
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
