import { CLEAR_ENTITY } from "../actions/entitites_actions";
import { SET_SEARCH_FIELD, CLEAR_SEARCH_FIELD } from "../actions/search_actions";

const uiReducer = (state = { searchField: null }, action) => {
  Object.freeze(state)
    switch(action.type){
      case SET_SEARCH_FIELD:
        return { searchField: action.searchField }
      case CLEAR_ENTITY:
        return {};
      default:
        return state;
    }
};

export default uiReducer;