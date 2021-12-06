import PossibilityImg from "../../assets/images/possibility.png";
import {
  PossibilitySection,
  PossibilityBg,
  Image,
  PossibilityContent,
  Subtitle,
  Title,
  Text,
} from "./style";

const Possibility = () => {
  return (
    <PossibilitySection id="possibility">
      <PossibilityBg>
        <Image src={PossibilityImg} alt="Possibility" />
      </PossibilityBg>
      <PossibilityContent>
        <Subtitle>Request Early Access to Get Started</Subtitle>
        <Title>
          The possibilities are <br /> beyond your imagination
        </Title>
        <Text>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </Text>
        <Subtitle>Request Early Access to Get Started</Subtitle>
      </PossibilityContent>
    </PossibilitySection>
  );
};

export default Possibility;
