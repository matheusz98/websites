import {
  ContentContainer,
  ContentTitle,
  Bar,
  Title,
  ContentText,
  Text,
} from "./style";

const Content = ({ title, text }) => {
  return (
    <ContentContainer>
      <ContentTitle>
        <Bar />
        <Title>{title}</Title>
      </ContentTitle>
      <ContentText>
        <Text>{text}</Text>
      </ContentText>
    </ContentContainer>
  );
};

export default Content;
