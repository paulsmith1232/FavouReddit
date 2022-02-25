import React from "react";
import Home from "./Home";
import Saved from "./Saved";
import Header from "./Header";
import {redditSearch, redditSaves} from "../apis/reddit";
import './App.css';

class App extends React.Component {
  state = {
    searchResults: [], 
    savedPosts: [],
    activeView: "search"
  };

  componentDidMount() {
    this.updateSaved();
  }

  // performs a search on the entered subreddit search term
  onTermSubmit = async searchTerm => {
    const response = await redditSearch(searchTerm);  // async function call to reddit API
    this.setState({ searchResults: response });    
  }

  // updates the localStorage value and updates the state
  onSubredditSave = (subreddit) => {
    if (subreddit) localStorage.setItem(subreddit.id, subreddit.name); // checks if subreddit value is not null and stores it locally
    this.updateSaved();
  }

  onSubredditUnsave = (subreddit) => {
    if (subreddit) localStorage.removeItem(subreddit.id); // checks if subreddit value is not null and removes it from the list
    this.updateSaved();
  }

  saveToggle = (subreddit) => {
    if (localStorage.getItem(subreddit)){
      return true;
    } else {
      return false;
    }
  }

  // retrieves the list of saved post IDs from localstorage
  retrieveStorage = () => {
    const retArray = [];
    for (let i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i);
      retArray.push(localStorage.getItem(key));      
    }
    return retArray;
  }

  updateSaved = async() => {
    const savedList = this.retrieveStorage(); // retrieves newly updated list from storage

    if(savedList.length > 0){
      let queryString ='';
      savedList.forEach((val, key, savedList) => {  // constructs string for API request
        if(Object.is(savedList.length - 1, key)){
          queryString += val;
        } else {
          queryString += val + ",";
        }
      });
  
      const response = await redditSaves(queryString);   // async function to call the reddit API
      this.setState({ savedPosts: response });
    }else{
      this.setState({savedPosts: []})
    }
  }

  onChangeView = () => {
    if (this.state.activeView === "search"){
      this.setState({activeView: "saved"})
    } else {
      this.setState({activeView: "search"})
    }
  }

  onPress = () => {
    console.log(this.state.savedPosts)
  }
  
  render() {
    return (
      <div className="ui container">
        <Header 
          onChangeView={this.onChangeView} 
          view={this.state.activeView}
        />
        <h1>FavouReddit</h1>
        {this.state.activeView === "search" 
          ? <Home 
              onSubredditSave={this.onSubredditSave}              
              onSubredditUnsave={this.onSubredditUnsave}
              saveToggle={this.saveToggle}
              subreddits={this.state.searchResults}
              onTermSubmit={this.onTermSubmit}
            />         
          : <Saved 
              onSubredditSave={this.onSubredditSave}  
              onSubredditUnsave={this.onSubredditUnsave}
              saveToggle={this.saveToggle}
              savedItems={this.state.savedPosts}            
            />
        }
      </div>      
    );
  }
}

export default App;