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
        --primary: #674188;
        --second: #C3ACD0;
        --second2: #F7EFE5;
        --background: #FFFBF5;
    }


`

export default GlobalStyle