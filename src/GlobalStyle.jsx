import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        flex-shrink: 0;
        --primary: #674188;
        --second: #C3ACD0;
        --second2: #F7EFE5;
        --background: #FFFBF5;
    }

body {
  margin: 0;
  background-color: #FFFBF5;

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: nomal;
    font-weight: 300;
    src: url('./styles/fonts/NotoSansKR-Light.ttf') format('woff2'),
      url('./styles/fonts/NotoSansKR-Light.ttf') format('woff'),
      url('./styles/fonts/NotoSansKR-Light.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 400;
    src: url('./styles/fonts/NotoSansKR-Regular.ttf') format('woff2'),
      url('./styles/fonts/NotoSansKR-Regular.ttf') format('woff'),
      url('./styles/fonts/NotoSansKR-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 500;
    src: url('styles/fonts/NotoSansKR-Medium.ttf') format('woff2');
  }
  
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: bold;
    src: url('./styles/fonts/NotoSansKR-Bold.ttf') format('woff2'),
      url('./styles/fonts/NotoSansKR-Bold.ttf') format('woff'),
      url('./styles/fonts/NotoSansKR-Bold.ttf') format('truetype');
  }
  
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`

export default GlobalStyle