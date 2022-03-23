import { connect } from "react-redux";
import UsersIndex from "./UsersIndex";
import { fetchUsers } from "../../actions/users_actions"

const mapStateToProps = state => {
  return{
    users: Object.values(state.entities.users)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex)