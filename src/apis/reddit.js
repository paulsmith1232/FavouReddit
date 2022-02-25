// function that makes a fetch request to the Reddit API
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

const redditSaves = (posts) => {
  return fetch(`https://www.reddit.com/by_id/${posts}.json`)
  .then(res => res.json())
  .then(data =>  {
    let results = data.data.children.map(data =>  data.data)    
    return results;
  })
}

export {redditSearch, redditSaves};

// if(res.status !== 200){
//   console.log('could not retrieve')
//   return []
// }