import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #797979;
  }

  p {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5 {
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
  }
`;