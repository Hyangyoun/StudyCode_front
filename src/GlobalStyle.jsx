import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    div {
        display: block;
    }
    ul,li {
        padding: 0px;
        list-style-type: none;
        display: flex;
        flex-direction: row;
    }

    * {
        flex-shrink: 0;
    }
`

export default GlobalStyle