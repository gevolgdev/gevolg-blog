import { Header, ArticleCard} from "../../components"
import { FeedContainer, FeedContent } from "./style";

import { useSelector } from "react-redux";
import { useArticle } from "../../redux/sliceArticles";
import { ArticleProps } from "../../types/types";

const Feed: React.FC = () => {

  const articles: ArticleProps[] = useSelector(useArticle);
  const newArticles: ArticleProps[] = articles.slice(1)

  return (
    <FeedContainer>
      <Header dashboard/>
      <FeedContent>
        {newArticles.map(item => (
          <ArticleCard article={item}/>
        ))}
      </FeedContent>
    </FeedContainer>
  )
}

export default Feed;