/*
* FILE          :   reddit.js
* PROJECT       :   SENG3080 - Assignment 1
* PROGRAMMER    :   Paul Smith
* STUDENT #     :   7964422
* FIRST VERSION :   2022-02-25
* DESCRIPTION   :   API call functions for pulling data from reddit.com                 
*/

// function that makes a fetch request to the Reddit API for subreddit posts
 const redditSearch = (subreddit) => {
  return fetch(`https://www.reddit.com/r/${subreddit}/hot.json?limit=10`)
  .then(res => res.json())
  .then(data =>  {
    let results = data.data.children.map(data => {
      if (!data.data.stickied){ // detects when a post is stickied and removes it from return
        return data.data;
      }
      return null;
    })
    results = results.filter(e => e !== null) // filter out the undefined posts
    return results;
  });
};

// function that makes fetch request to the Reddit API for specific posts
const redditSaves = (posts) => {
  return fetch(`https://www.reddit.com/by_id/${posts}.json`)
  .then(res => res.json())
  .then(data =>  {
    let results = data.data.children.map(data =>  data.data)    
    return results;
  })
}

export {redditSearch, redditSaves};