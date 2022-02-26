/*
* FILE          :   index.js
* PROJECT       :   SENG3080 - Assignment 1
* PROGRAMMER    :   Paul Smith
* STUDENT #     :   7964422
* FIRST VERSION :   2022-02-25
* DESCRIPTION   :   An app designed to search reddit for subreddit posts
*                   and allow users to save those posts to local storage. 
*                   Deployed at:
*                   https://gracious-meninsky-da392e.netlify.app/                  
*/
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
    this.updateSaved(); // populates the saved posts list
  }

  // performs a search on the entered subreddit search term
  onTermSubmit = async searchTerm => {
    const response = await redditSearch(searchTerm);  // async function call to reddit API
    this.setState({ searchResults: response });    
  }

  // updates the localStorage value for post addition
  onSubredditSave = (subreddit) => {
    if (subreddit) localStorage.setItem(subreddit.id, subreddit.name); // checks if subreddit value is not null and stores it locally
    this.updateSaved();
  }

  // updates the localStorage value for post removal
  onSubredditUnsave = (subreddit) => {
    if (subreddit) localStorage.removeItem(subreddit.id); // checks if subreddit value is not null and removes it from the list
    this.updateSaved();
  }

  // handles logic of rendering save/unsave buttons
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

  // updates the saved state value with values pulled from localstorage
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
    } else {
      this.setState({savedPosts: []})
    }
  }

  // handles changing the active view between search and saved mode
  onChangeView = () => {
    if (this.state.activeView === "search"){
      this.setState({activeView: "saved"})
    } else {
      this.setState({activeView: "search"})
    }
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