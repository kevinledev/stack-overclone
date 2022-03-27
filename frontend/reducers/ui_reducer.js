import { SET_SEARCH_FIELD, CLEAR_SEARCH_FIELD } from "../actions/search_actions";

const uiReducer = (state = { searchField: null }, action) => {
  Object.freeze(state)
    switch(action.type){
      case SET_SEARCH_FIELD:
        return { searchField: action.searchField }
      default:
        return state;
    }
};

export default uiReducer;