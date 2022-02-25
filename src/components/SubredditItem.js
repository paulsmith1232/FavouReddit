import React from "react";

const SubredditItem = ({ onSubredditSave, onSubredditUnsave, saveToggle, subreddit }) => {  
  return (
    <div className="subreddit-item item">
      <div className="content">
        <div className="header"><a href={subreddit.url}>{subreddit.title}</a></div>
        <ul className="subreddit-options-list">
          <li>
            <a href={"https://reddit.com" + subreddit.permalink}>{subreddit.num_comments} comments</a>
          </li>
          <li>
            <p>Score: {subreddit.score}</p>
          </li>
          <li>
            {
              saveToggle(subreddit.id)
              ? <button onClick={() =>onSubredditUnsave(subreddit)}>Unsave</button>
              : <button onClick={() =>onSubredditSave(subreddit)}>Save</button>              
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubredditItem;