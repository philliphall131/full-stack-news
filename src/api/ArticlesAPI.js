import axios from "axios";
const numArticles = 12;

export const fetchArticleByID = async (articleID) => {
  let article = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${articleID}.json`)
  return article.data
};

export const fetchArticlesBySection = async (section) => {
  let articleIds = await axios.get(`https://hacker-news.firebaseio.com/v0/${section}.json`)
      
  const promises = []
  for (let i=0; i<numArticles; i++){
    promises.push(axios.get(`https://hacker-news.firebaseio.com/v0/item/${articleIds.data[i]}.json`))
  }

  let x = await Promise.all(promises)
  return x.map((response)=>{return response.data})
};
