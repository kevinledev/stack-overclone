import { connect } from "react-redux";
import { searchQuestions } from "../../../actions/questions_actions";
import { withRouter } from "react-router-dom";
import Search from "./Search";
import { setSearchField } from "../../../actions/search_actions";
import { clearEntity } from "../../../actions/entitites_actions";

// const mapStateToProps = (state) => {
//   return {
//     searchField: "",
//   };
// };

const mapDispatchToProps = (dispatch) => ({
  searchQuestions: (searchData) => dispatch(searchQuestions(searchData)),
  clearEntity: () => dispatch(clearEntity()),
  setSearchField: (searchField) => dispatch(setSearchField(searchField)),
});

export default withRouter(connect(null, mapDispatchToProps)(Search));
