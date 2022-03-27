import { connect } from "react-redux";
import { searchQuestions } from "../../actions/questions_actions";
import SearchResults from "./SearchResults";
import Search from "./SearchResults";

const mapStateToProps = (state, ownProps) => {
  return {
    questions: Object.values(state.entities.questions),
    users: state.entities.users,
    searchField: state.ui.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchQuestions: (searchField) => dispatch(searchQuestions(searchField))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
