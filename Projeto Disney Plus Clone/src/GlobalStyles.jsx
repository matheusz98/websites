import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        border: none;
        outline: none;
    }

    img {
        max-width: 100%;
    }

    body {
        font-family: 'Poppins', sans-serif;
    }

    :root {
        --main: #090b13;
    }
`;
