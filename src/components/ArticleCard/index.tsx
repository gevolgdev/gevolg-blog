import { ArticleProps } from "../../types/types";
import { ArticleContainer } from "./style"

interface Props {
  article: ArticleProps
}

const Article: React.FC<Props> = (props) => {
  const { article } = props;

  const date: string = new Date().toLocaleString();

  return (
    <ArticleContainer image={article.image}>
      <span className='details'>{date} • {article.subject}</span>

      <div className="content">

        <div className="image"/>

        <div className="infos">
          <h2>{article.title}</h2>
          <p>{article.articleBody}</p>
        </div>
      </div>
    </ArticleContainer>
  )
}

export default Article;