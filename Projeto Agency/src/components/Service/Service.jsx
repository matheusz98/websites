import { useState } from "react";
import {
  Container,
  Left,
  Right,
  Image,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  Button,
  Icon,
  Video,
} from "./ServiceStyle";
import ImageThree from "../../images/03.png";
import MiniCard from "../MiniCard/MiniCard";
import Play from "../../images/play.png";

const Service = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Left>
        <Image open={open} src={ImageThree} />
        <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            We provide digital experience services to startups and small
            businesses to looking for a partner of their digital media, design &
            development, lead generation and communications requirents. We work
            with you. not for you. Although we have great resources.
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} />
            How it works
          </Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Service;
