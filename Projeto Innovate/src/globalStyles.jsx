import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        border: none;
        outline: none;
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
    }

    img {
        max-width: 100%;
    }
`;

export default GlobalStyle;
