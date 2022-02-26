/*
* FILE          :   SubredditList.js
* PROJECT       :   SENG3080 - Assignment 1
* PROGRAMMER    :   Paul Smith
* STUDENT #     :   7964422
* FIRST VERSION :   2022-02-25
* DESCRIPTION   :   Renders lists of posts                
*/
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