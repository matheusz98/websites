import styled from "styled-components";
import { Link as LinkRouter } from 'react-router-dom';

const Title = styled(LinkRouter)`
  font-size: 2rem;
  font-weight: 700;
  color: #0c0c0c;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  
  span {
    font-weight: 700;
    color: #ce0c4d;
    transition: 0.3s ease-in-out;
  }

  &:hover {
    color: #ce0c4d;

    span {
      color: #0c0c0c;
    }
  }
`;

const Logo = () => {
  return (
    <Title>
      <span>M</span>obilia<span>.</span>
    </Title>
  );
};

export default Logo;
