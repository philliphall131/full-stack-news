import ArticleTeaser from "../ArticleTeaser/ArticleTeaser";
import { ListGroup } from "react-bootstrap";

function ArticleList(props) {
 
  return (
    <ListGroup>
      {props.articles.map((article, index) => {
          return (
            <ListGroup.Item key={index} className={index % 2 ? "odd-item" : "even-item"}>
              <ArticleTeaser 
                pageUrl={`/articles/${article.id}`}
                id={index+1}
                {...article}
              />
            </ListGroup.Item>)
        })}
    </ListGroup>
  )
}

export default ArticleList;


