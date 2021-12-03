import styled from "styled-components";

export const WhatSection = styled.section`
  display: flex;
  flex-direction: column;
  background: var(--color-footer);
  /* ff 3.6+ */
  background: -moz-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 2rem;
  margin: 4rem 6rem;

  @media (max-width: 768px) {
    margin: 4rem;
  }

  @media (max-width: 660px) {
    margin: 4rem 2rem;
  }
`;

export const WhatContent = styled.div`
  display: flex;

  div {
    margin: 0;

    @media (max-width: 660px) {
      flex-direction: column;
    }

    p {
      max-width: 700px;

      @media (max-width: 660px) {
        margin-top: 0.5rem;
      }
    }
  }
`;

export const WhatTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 4rem 0 2rem;

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0;
  }
`;

export const Title = styled.h2`
  max-width: 510px;
  font-size: 34px;
  line-height: 45px;
  font-weight: 800;
  background: var(--gradient-text);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 660px) {
    font-size: 28px;
    line-height: 40px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  color: var(--color-subtext);
  line-height: 30px;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 860px) {
    margin-top: 1rem;
  }
`;

export const WhatContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;

  div {
    min-width: 210px;
    display: unset;
    flex: 1;
    flex-direction: column;
    margin: 1rem;

    @media (max-width: 480px) {
      min-width: 100%;
      margin: 1rem 0;
    }

    p {
      margin-top: 0.5rem;
    }
  }
`;
