import styled from "styled-components";
import { Search } from "../../Icons";

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    width: min(400px, 100%);
    display: flex;
    flex-direction: column;
  }
`;

export const SearchWrapper = styled.div`
  width: min(400px, 100%);
  max-height: 60px;
  position: fixed;
  top: 0;
  z-index: 2;
  padding: 10px 24px;
  background: var(--primary);
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 20px;
  background: var(--search);
  outline: 0;

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    top: -33px;
    left: 15px;
    position: relative;
    z-index: 1;
    transition: 0.3s ease-in-out;
  }

  &:focus {
    border: 1px solid var(--twitter);

    ~ svg {
      fill: var(--twitter);
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 30px;
  height: 30px;
  fill: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3px;
  padding: 60px 24px 200px;

  > div + div {
    margin-top: 15px;
  }
`;
