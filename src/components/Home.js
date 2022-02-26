/*
* FILE          :   Home.js
* PROJECT       :   SENG3080 - Assignment 1
* PROGRAMMER    :   Paul Smith
* STUDENT #     :   7964422
* FIRST VERSION :   2022-02-25
* DESCRIPTION   :   The search page and 'home' view of the app               
*/
import React from "react";
import SearchBar from "./SearchBar";
import SubredditList from "./SubredditList";

const Home = ({ onSubredditSave, onSubredditUnsave, onTermSubmit, saveToggle, subreddits}) => {
  return(
    <div className="ui segment">
      <SearchBar 
        onFormSubmit={onTermSubmit}
      />
      <SubredditList 
        onSubredditSave={onSubredditSave} 
        onSubredditUnsave={onSubredditUnsave}
        saveToggle={saveToggle}
        subreddits={subreddits}
      />
    </div>
  )
};

export default Home;