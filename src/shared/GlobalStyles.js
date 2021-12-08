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
  @font-face {
    font-family: 'paybooc-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/paybooc-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'paybooc-Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/paybooc-Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${styles.color};
    overflow-x: hidden;
    background-color: ${styles.background};
    font-family: 'paybooc-Bold';
  }

  ol, ul, li {
    list-style-type: none;
  }
  
`
export default GlobalStyles

