import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from "./styles";
import ProfileImg from "../../assets/img.jpg";

const Tweet = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Voce retweetou
      </Retweeted>

      <Body>
        <Avatar src={ProfileImg} alt="Foto de perfil" />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>05 de nov</time>
          </Header>

          <Description>Foguete não tem ré! 🚀</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              100
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
