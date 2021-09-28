import styled from "styled-components";

export const GallerySection = styled.section`
  margin: 6.25rem 0;
`;

export const GalleryContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const GalleryTitle = styled.div`
  text-align: center;

  h2 {
    span {
      font-weight: 700;
      color: #ce0c4d;
    }
  }

  p {
    margin: 2rem 0;
  }
`;

export const GalleryContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
