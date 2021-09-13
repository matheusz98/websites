import styled from 'styled-components';
import { IoMdArrowRoundForward } from 'react-icons/io';

export const Section = styled.section `
    width: 100%;
    height: 100%;
    padding: 4rem 8rem;

    @media (max-width: 768px) {
        padding: 2rem 3rem;
    }

    h2 {
        margin-bottom: 5rem;
        font-size: clamp(1.5rem, 6vw, 2rem);

        @media (max-width: 768px) {
            text-align: center;
            margin-bottom: 3rem;
        }
    }
`

export const Container = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 600px;
    padding: 3rem calc((100vw - 1300px) / 2);

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 500px;
    }
`

export const ColumnLeft = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding-right: 1rem;

    @media (max-width: 768px) {
        padding-right: 0;
    }

    p {
        font-size: 1.3rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }
`

export const ColumnRight = styled.div `
    display: flex;
    justify-content: flex-start;
    align-self: flex-end;
    align-items: center;
    flex-direction: column;
    padding-left: 1rem;

    @media (max-width: 768px) {
        padding-left: 0;
    }

    p {
        font-size: 1.3rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }
`

export const ImageContainer = styled.div `
    width: 100%;
    height: 350px;
    margin-bottom: 1.5rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Arrow = styled(IoMdArrowRoundForward) `
    margin-left: 0.5rem;
`