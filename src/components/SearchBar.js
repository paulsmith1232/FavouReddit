/*
* FILE          :   SearchBar.js
* PROJECT       :   SENG3080 - Assignment 1
* PROGRAMMER    :   Paul Smith
* STUDENT #     :   7964422
* FIRST VERSION :   2022-02-25
* DESCRIPTION   :   Renders the search bar for the app             
*/
import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: '', searchedTerm: ''};

  // handles the input of data into the search bar
  onInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  // handles form submission logic
  onFormSubmit = event => {
    event.preventDefault(); // prevents triggering a page refresh
    this.setState({ searchedTerm: this.state.searchTerm })
    this.props.onFormSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Subreddit Search</label>
            <input 
              type="text" 
              value={this.state.searchTerm} 
              onChange={this.onInputChange}
            />
          </div>
        </form>
        { this.state.searchedTerm !=='' && <p className="search-term">Results for: {this.state.searchTerm}</p> }
        
      </div>
    );
  }
}

export default SearchBar;