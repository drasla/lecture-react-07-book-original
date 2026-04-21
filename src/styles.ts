import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        margin: 0;
        background: #f6f8fa;
        color: #222;
    }

    a { text-decoration: none; color: inherit; }
`;

export default GlobalStyle;
