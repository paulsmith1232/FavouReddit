import React from 'react';
import SubredditItem from './SubredditItem';

const SubredditList = ({ onSubredditSave, onSubredditUnsave, saveToggle, subreddits }) => {
  const renderedList = subreddits.map((subreddit) => {
    return (
      <SubredditItem 
        key={subreddit.id} 
        onSubredditSave={onSubredditSave} 
        onSubredditUnsave={onSubredditUnsave}
        saveToggle={saveToggle}
        subreddit={subreddit}
      />
    )
  })

  return <div className='ui relaxed divided list'>{renderedList}</div>
}

export default SubredditList;