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

    body {
        font-family: 'Nunito', sans-serif;
        background: var(--white);
    }

    img {
        max-width: 100%;
    }

    :root {
        --main: #daa520;
        --white: #ffffff;
        --navbar: #ebebeb;
        --black: #3e3f43;
        --title: #313235;
        --pink: #f9bdbd;
        --beige: #f7dea6;
        --blue: #a8dcec;
        --footer: #eeeeee;
    }
`;
