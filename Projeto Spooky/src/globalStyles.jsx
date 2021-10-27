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
        background: rgb(226,112,58);
        background: linear-gradient(90deg, rgba(226,112,58,1) 0%, rgba(241,147,92,1) 100%);
    }
`;

export default GlobalStyle;
