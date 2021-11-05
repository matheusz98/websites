import styled, { css } from "styled-components";
import { Chat, Rocketseat, Favorite } from "../../Icons";

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);
`;
export const Retweeted = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--gray);
`;

export const RocketseatIcon = styled(Rocketseat)`
  width: 16px;
  height: 16px;
  margin-left: 36px;
  margin-right: 10px;

  > path {
    fill: var(--gray);
  }
`;

export const Body = styled.div`
  display: flex;
  position: relative;
  margin-top: 3px;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  background: var(--gray);
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2px;
  padding-left: 60px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: var(--gray);
  }

  > strong,
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Dot = styled.div`
  width: 2px;
  height: 2px;
  background: var(--gray);
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;

export const ImageContent = styled.div`
  width: 100%;
  height: min(285px, max(175px, 41vw));
  margin-top: 12px;
  background: var(--outline);
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px auto 0;
  transition: 0.3s ease-in-out;

  > div {
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }

  &:nth-child(2) {
    color: var(--retweet);
    > svg path {
      fill: var(--retweet);
    }
  }

  &:nth-child(3) {
    color: var(--like);
    > svg {
      fill: var(--like);
    }
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
`;

export const CommentIcon = styled(Chat)`
  ${iconCSS}
`;

export const RetweetIcon = styled(Rocketseat)`
  ${iconCSS}
`;

export const LikeIcon = styled(Favorite)`
  ${iconCSS}
`;
