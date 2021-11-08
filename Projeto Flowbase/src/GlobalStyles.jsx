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
        background: var(--body);
    }

    h1, h2, h3, h4, h5, h6, button, a {
        font-family: 'DM Sans', sans-serif;
        color: var(--title);
    }

    p, span {
        font-family: 'Mulish', sans-serif;
        font-weight: 400;
        color: var(--text);
    }

    img {
        max-width: 100%;
    }

    :root {
        --body: #f2f2f2;
        --primary: #5454d4;
        --secondary: #ff7143;
        --title: #19191b;
        --text: #696871;
        --card: #eae9f2;
        --cardtitle: #1d293f;
        --cardbuttonhover: #9f3919;
    }

`;
