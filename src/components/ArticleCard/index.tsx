import { ArticleProps } from "../../types/types";
import { ArticleContainer } from "./style"

interface Props {
  article: ArticleProps
}

const Article: React.FC<Props> = (props) => {
  const { article } = props;

  console.log(article)

  const date = new Date();

  return (
    <ArticleContainer>
      <div>
        <div className="image"/>
        <div>
          <span>x • x</span>
          <h2>x</h2>
          <p>x</p>
        </div>
      </div>
    </ArticleContainer>
  )
}

export default Article;