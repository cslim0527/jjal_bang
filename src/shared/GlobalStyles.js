import { createGlobalStyle } from "styled-components"

const styles = {
  color: '#2f2f2f',
  background: '#fff'
}

// 페이지별 배경색 적용을 위해 switch
switch(window.location.pathname) {
  case '/login':
    styles.color = '#fff'
    styles.background = '#141518'
    break 

  case '/signup':
    styles.color = '#fff'
    styles.background = '#141518'
    break 

  case '/write':
    styles.color = '#fff'
    styles.background = '#141518'
    break 

  default: 
    styles.color = '#2f2f2f'
    styles.background = '#fff'
    break
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${styles.color};
    overflow-x: hidden;
    background-color: ${styles.background};
  }

  ol, ul, li {
    list-style-type: none;
  }
`
export default GlobalStyles

