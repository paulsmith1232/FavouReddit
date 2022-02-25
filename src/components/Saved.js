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