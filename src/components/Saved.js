/*
* FILE          :   Saved.js
* PROJECT       :   SENG3080 - Assignment 1
* PROGRAMMER    :   Paul Smith
* STUDENT #     :   7964422
* FIRST VERSION :   2022-02-25
* DESCRIPTION   :   Renders the saved items view of the app                
*/
import React from "react";
import SubredditList from "./SubredditList";

const Saved = ({ onSubredditSave, onSubredditUnsave, saveToggle, savedItems}) => {
  return(
    <div className="ui segment">
      <label className="page-label">Saved Posts</label>
      <SubredditList 
        onSubredditSave={onSubredditSave} 
        onSubredditUnsave={onSubredditUnsave}
        saveToggle={saveToggle}
        subreddits={savedItems}
      />
    </div>
  )
};

export default Saved;