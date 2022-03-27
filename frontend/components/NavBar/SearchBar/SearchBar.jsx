import React from "react";


export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchField: "" }

    this.updateSearchField = this.updateSearchField.bind(this)
    this.performSearch = this.performSearch.bind(this)
  }

  updateSearchField(e) {
    this.setState({ searchField: e.currentTarget.value })
  }

  performSearch(e) {
    e.preventDefault();
    this.props.clearEntity();
    this.props.setSearchField(this.state.searchField)
    this.props.history.push("/search");
    this.setState({
      searchField: ""
    })
    // .then(()=> window.location.reload())
  }

  render() {
    
    return (
      <form className="search" onSubmit={this.performSearch}>
        <img src={window.searchIcon}></img>
        <input className="search-input" type="text" placeholder="Search..." onChange={this.updateSearchField} value={this.state.searchField} />
        <div className="search-icon"></div>
      </form>
    );
  }
}
