import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        outline: none;
        list-style: none;
        text-decoration: none;
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }

    img {
        max-width: 100%;
    }

    :root {
        --white: #ffffff;
        --orange: #ec421d;
        --bg: #1c9aa8;
        --blue: #4b59f7;
    }
`;
