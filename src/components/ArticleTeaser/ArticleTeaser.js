import { Link } from "react-router-dom";

function ArticleTeaser(props) {
  const time = new Date(props.time * 1000)

  return (
    <div>
      <Link to={props.pageUrl}>{props.title}</Link>
      <p>{ time.toLocaleDateString() }</p>
    </div>
  )
}

export default ArticleTeaser;

