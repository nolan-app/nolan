import { createGlobalStyle } from "styled-components";
import "antd/dist/antd.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Nunito Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;

export default GlobalStyle;
