import styled, { css } from "styled-components";
import { BsTwitter } from "react-icons/bs";

import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
} from "../../Icons";

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    max-height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: sticky;
    top: 0;
    left: 0;
    padding: 10px 20px 20px;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(BsTwitter)`
  width: 41px;
  height: 41px;
  color: var(--twitter);
  margin-bottom: 20px;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 8px 0;
  outline: 0;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      font-size: 20px;
      font-weight: bold;
      margin-left: 20px;
    }

    padding-right: 15px;
  }

  & + button {
    margin-top: 16px;
  }

  & + button:last-child {
    width: 40px;
    height: 40px;
    margin-top: 33px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;
  color: var(--white);
  flex-shrink: 0;
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;
export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCSS}
`;
export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;

export const Botside = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin-left: 10px;

    > span {
      color: var(--gray);
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;
  transition: 0.3s ease-in-out;

  @media (min-width: 1280px) {
    width: 25px;
    height: 25px;
    display: inline-block;
    color: var(--white);
    margin-left: 30px;
    cursor: pointer;

    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`;
