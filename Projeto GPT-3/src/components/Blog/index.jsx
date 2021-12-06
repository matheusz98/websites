import Article from "../Article";
import {
  ImageOne,
  ImageTwo,
  ImageThree,
  ImageFour,
  ImageFive,
} from "../../data/blogData";
import {
  BlogSection,
  BlogTitle,
  Title,
  BlogContainer,
  BlogContainerA,
  BlogContainerB,
} from "./style";

const Blog = () => {
  return (
    <BlogSection id="blog">
      <BlogTitle>
        <Title>
          A lot is happening, <br /> We are blogging about it.
        </Title>
      </BlogTitle>
      <BlogContainer>
        <BlogContainerA>
          <Article
            imgUrl={ImageOne}
            date="Sep 28, 2021"
            text="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
        </BlogContainerA>
        <BlogContainerB>
          <Article
            imgUrl={ImageTwo}
            date="Sep 28, 2021"
            text="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={ImageThree}
            date="Sep 28, 2021"
            text="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={ImageFour}
            date="Sep 28, 2021"
            text="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={ImageFive}
            date="Sep 28, 2021"
            text="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
        </BlogContainerB>
      </BlogContainer>
    </BlogSection>
  );
};

export default Blog;
