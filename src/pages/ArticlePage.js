import Article from '../components/Article/Article.js'
import { fetchArticleByID } from '../api/ArticlesAPI.js';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

function ArticlePage() {
  const params = useParams()
  let articleId = params.articleID;
  const [article, setArticle] = useState(null)

  useEffect( async () => {
    setArticle(await fetchArticleByID(articleId))
  }, [articleId])

  return (
    <Row className="justify-content-center">
      <Col sm={8}>
        { 
          article
            ? <Article {...article} />
            : <span>404: Article not found.</span>
        }
      </Col>
    </Row>
  )
}

export default ArticlePage;
