import ArticleList from '../components/ArticleList/ArticleList';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

function ArticlePage(props) {
  const params = useParams()
  let sectionName = params.sectionName

  // effects
  useEffect(() => {
    props.setArticleType(sectionName)
  }, [params])
  
  const getTitle = () => {
    let title = ''
    props.sections.forEach((item)=>{
      if (item.value===sectionName)
        {title=item.title}
    })
    return title
  }

  return (
    <div>
      <h3>{getTitle()}</h3>
      <ArticleList articles={props.articles} />
    </div>
  )
}

export default ArticlePage;
