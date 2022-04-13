import { Card, Button } from "react-bootstrap";
import './article.css';

export const formatTime = (time)=>{
  if (time==null) {return 'oops! not a valid date!'}
  let newTime = new Date(time * 1000)
  return newTime.toLocaleDateString()
}

function Article(props) {
  return (
    <Card className="article-card" >
      <Card.Title>
          <h3>{props.title}</h3><br />
          <h5>By: {props.by}</h5>
          <h5>Date: {formatTime(props.time)}</h5>
      </Card.Title>
      <Card.Body>
        <a target="_blank" href={props.url}>
          <Button variant="primary">Go to article</Button>
        </a>
      </Card.Body>
    </Card>
  )
}

export default Article;

