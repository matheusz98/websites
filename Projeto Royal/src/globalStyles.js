import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        outline: none;
        border: none;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
    }
`;

export default GlobalStyle;