import List from "../List";
import FollowSugestion from "../FollowSugestion";
import News from "../News";
import StickyBox from "react-sticky-box";
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

const SideBar = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSugestion name="Ante DEGUEMON" nickname="@antedeguemon" />,
              <FollowSugestion name="Ante DEGUEMON" nickname="@antedeguemon" />,
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
