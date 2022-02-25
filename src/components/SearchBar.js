import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: '', searchedTerm: ''};

  onInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
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