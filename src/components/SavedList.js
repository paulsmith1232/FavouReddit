import React from 'react';
import SubredditItem from './SubredditItem';

const SavedList = ({ onSubredditSave, savedItems }) => {
  const renderedList = savedItems.map((subreddit) => {
    console.log(subreddit);
    return <SubredditItem key={subreddit.data.id} onSubredditSave={onSubredditSave} subreddit={subreddit}/>
  })

  return <div className='ui relaxed divided list'>{renderedList}</div>
}

export default SavedList;