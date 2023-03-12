import {createGlobalStyle} from "styled-components";

export const ResetCSS = createGlobalStyle `

    * {
        padding:0;
        margin:0;
        border-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.dark_800 }
    }

    button {
        cursor: pointer
    }

    a {
        color: inhert;
        text-decoration: none;

        &:hover {
            filter:brightness[0.8];
        }

    }

`