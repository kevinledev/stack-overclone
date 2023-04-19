import React, { useState, useCallback } from "react";

interface SearchBarProps {
  clearEntity: () => void;
  setSearchField: (searchField: string) => void;
  history: {
    push: (path: string) => void,
  };
}

const SearchBar: React.FC<SearchBarProps> = ({
  clearEntity,
  setSearchField,
  history,
}) => {
  const [searchField, setSearchFieldState] = useState("");

  const updateSearchField = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchFieldState(e.currentTarget.value);
    },
    []
  );

  const performSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      clearEntity();
      setSearchField(searchField);
      history.push("/search");
      setSearchFieldState("");
      // .then(() => window.location.reload())
    },
    [clearEntity, setSearchField, history, searchField]
  );

  return (
    <form className="search" onSubmit={performSearch}>
      <img src={window.searchIcon} alt="search icon" />
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        onChange={updateSearchField}
        value={searchField}
      />
      <div className="search-icon"></div>
    </form>
  );
};

export default SearchBar;
