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

        ::-webkit-scrollbar{
            width: 0.6rem;  
            background: #413e3e;
        }

        ::-webkit-scrollbar-thumb{
            background: #272525;
            border-radius: .5rem;
        }
    }

    img {
        max-width: 100%;
    }

    body {
        background: blue;
    }
`;

export default GlobalStyle;
