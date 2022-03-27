export const SET_SEARCH_FIELD = "SET_SEARCH_FIELD";
export const CLEAR_SEARCH_FIELD = "CLEAR_SEARCH_FIELD";

export const setSearchField = (searchField) => ({
  type: SET_SEARCH_FIELD,
  searchField,
});

export const clearSearchField= () => ({
  type: CLEAR_SEARCH_FIELD,
});