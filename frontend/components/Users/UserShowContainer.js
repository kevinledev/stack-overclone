import { connect } from "react-redux";
import UserShow from "./UserShow";
import { fetchUser } from "../../actions/users_actions";

const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.currentUserId;
  return {
    user: state.entities.users[ownProps.match.params.userId],
    questions: Object.values(state.entities.questions).filter(
      (q) => q.asker_id === parseInt(currentUserId)),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)