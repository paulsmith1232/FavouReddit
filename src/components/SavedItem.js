import React from "react";
import './SubredditItem.css';

const SubredditItem = ({ onSubredditSave, subreddit}) => {
  return (
    <div className="subreddit-item item">
      <div className="content">
        <div className="header">{subreddit.title}</div>
        <p>
          <button onClick={() =>onSubredditSave(subreddit)}>Save</button>
        </p>
      </div>
    </div>
  );
};

export default SubredditItem;