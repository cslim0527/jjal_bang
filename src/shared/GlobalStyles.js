import { createGlobalStyle } from "styled-components"

const styles = {
  color: '#2f2f2f',
  background: '#fff'
}

// 페이지별 배경색 적용을 위해 switch

if (window.location.pathname === '/login') {
  styles.color = '#fff'
  styles.background = '#141518'
}

if (window.location.pathname === '/signup') {
  styles.color = '#fff'
  styles.background = '#141518'
}

if (window.location.pathname === '/write') {
  styles.color = '#fff'
  styles.background = '#141518'
}

if (window.location.pathname === '/write') {
  styles.color = '#fff'
  styles.background = '#141518'
}

if (window.location.pathname.indexOf('/user/posts/') > -1) {
  styles.color = '#fff'
  styles.background = '#141518'
}

if (window.location.pathname.indexOf('/user/favorites/') > -1) {
  styles.color = '#fff'
  styles.background = '#141518'
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

