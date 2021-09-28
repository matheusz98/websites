import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        border: none;
        outline: none;
        font-family: "Merriweather", serif;
        font-weight: 400;
    }
    
    img {
        max-width: 100%;
    }

    body {
        background: #f1e7e7;
        overflow-x: hidden;
    }

    p {
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        font-weight: 300;
        color: #0c0c0c;
    }

    h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #0c0c0c;
    }
`;

/*
font-family: 'Poppins', sans-serif;
*/
