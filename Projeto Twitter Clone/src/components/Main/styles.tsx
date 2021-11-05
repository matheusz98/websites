import styled, { css } from "styled-components";
import { ArrowLeft, Home, Search, Notifications, Email } from "../../Icons";

export const Container = styled.div`
  width: min(601px, 100%);
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background: var(--primary);
  z-index: 2;
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);
  text-align: left;

  > button {
    padding: 8px;
    border-radius: 50%;
    outline: 0;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 17px;

  > strong {
    font-size: 20px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const BottomMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  padding: 8px min(46px, max(10vw, 10px));
  background: var(--primary);

  @media (min-width: 500px) {
    display: none;
  }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;
  fill: var(--gray);
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover,
  &.active {
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;

export const SearchIcon = styled(Search)`
  ${iconCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
