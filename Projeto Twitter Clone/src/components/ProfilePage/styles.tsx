import styled, { css } from "styled-components";
import { LocationOn, Cake } from "../../Icons";
import Button from "../Button";

export const Container = styled.div`
  max-height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: min(33vw, 200px);
  flex-shrink: 0;
  position: relative;
  background: var(--twitter);
`;

export const Avatar = styled.img`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));
  position: absolute;
  background: var(--gray);
  border: 3px solid var(--primary);
  border-radius: 50%;
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  > h1 {
    font-size: 20px;
    font-weight: bold;
  }

  > h2 {
    font-size: 14px;
    font-weight: normal;
    color: var(--gray);
  }

  > p {
    font-size: 14px;
    margin-top: 10px;

    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }

  > ul {
    list-style: none;
    margin: 10px 0;

    > li {
      font-size: 14px;
      color: var(--gray);

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;

export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 14px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;

export const EditButton = styled(Button)`
  top: 2vw;
  right: 7px;
  position: absolute;
  padding: 5px 16px;
  font-size: 14px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 20px;
    font-size: 14px;
  }
`;
