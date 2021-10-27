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
        background: rgb(255,201,150);
        background: linear-gradient(90deg, rgba(255,201,150,1) 0%, rgba(159,95,128,1) 50%, rgba(255,132,116,1) 100%);
    }
`;

export default GlobalStyle;
