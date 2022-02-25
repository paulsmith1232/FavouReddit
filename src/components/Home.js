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