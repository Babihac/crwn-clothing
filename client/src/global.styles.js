import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: "Open Sans Condensed";
    -webkit-font-smoothing: antialiased;
    padding: 20px 40px;

    @media screen and (max-width: 800px) {
        padding: 10px;
    }
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
`;
