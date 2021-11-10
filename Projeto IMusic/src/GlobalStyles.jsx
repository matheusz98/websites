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
        font-family: 'Poppins', sans-serif;
    }

    body {
        background: blue;
    }

    img {
        max-width: 100%;
    }

    :root {
        --orange: #ebc214;
        --pink: #d61eed;
        --white: #f7f8fa;
    }
`;
