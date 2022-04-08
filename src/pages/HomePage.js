import ArticleList from '../components/ArticleList/ArticleList.js'
import { useEffect } from 'react';

function HomePage(props) {

  useEffect(()=> {
    props.setArticleType('topstories')
  }, [])

  return (
    <div>
      <h3>Top Stories</h3>
      <ArticleList articles={props.articles} />
    </div>
  );
}

export default HomePage;

