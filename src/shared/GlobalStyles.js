import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #2f2f2f;
  }

  ol, ul, li {
    list-style-type: none;
  }
`
export default GlobalStyles

