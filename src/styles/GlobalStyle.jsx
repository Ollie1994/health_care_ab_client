import { createGlobalStyle } from "styled-components";
// global styles that affects the whole app
// you can add more if needed
const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    width: 100vw;
    height: 100vh;
    line-height: normal;
  }

  .link {
   text-decoration: none;
    color: inherit;
    all: unset;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  h1 {
  font-size: 40px;
  font-weight: 700;
  }

  h2 {
  font-size: 32px;
  font-weight: 700;
  }

  h3 {
  font-size: 18px;
  font-weight: 600;
  }

  h4 {
  font-size: 16px;
  font-weight: 500;
  }

  h5 {
  font-size: 14px;
  font-weight: 400;
  }

  h6 {
  font-size: 12px;
  font-weight: 400;
  }

  p {
  font-size: 10px;
  font-weight: 400;
  }


`;

export default GlobalStyle;
