import Content from "../Content";
import {
  WhatSection,
  WhatContent,
  WhatTitle,
  Title,
  Text,
  WhatContainer,
} from "./style";

const WhatGPT3 = () => {
  return (
    <WhatSection id="wgpt3">
      <WhatContent>
        <Content
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </WhatContent>
      <WhatTitle>
        <Title>The possibilities are beyond your imagination</Title>
        <Text>Explore the Library</Text>
      </WhatTitle>
      <WhatContainer>
        <Content
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Content
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Content
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </WhatContainer>
    </WhatSection>
  );
};

export default WhatGPT3;
