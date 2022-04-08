import Article from '../components/Article/Article.js'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

export const getData = (articleId)=>{
  return axios.get(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json`).then((response)=>{
    return response
  })
}

function ArticlePage() {
  const params = useParams()
  let articleId = params.articleID;
  const [article, setArticle] = useState(null)

  useEffect(()=> {
    getData(articleId).then((response)=>{
      setArticle(response.data)
    })
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
