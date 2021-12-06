import {
  ArticleContainer,
  ArticleImage,
  Img,
  ArticleContent,
  ArticleInfo,
  ArticleDate,
  Text,
  Full,
} from "./style";

const Article = ({ imgUrl, date, text }) => {
  return (
    <ArticleContainer>
      <ArticleImage>
        <Img src={imgUrl} alt={text} />
      </ArticleImage>
      <ArticleContent>
        <ArticleInfo>
          <ArticleDate>{date}</ArticleDate>
          <Text>{text}</Text>
          <Full>Read Full Article</Full>
        </ArticleInfo>
      </ArticleContent>
    </ArticleContainer>
  );
};

export default Article;
