import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        //flex-shrink: 0;
        --primary: #674188;
        --second: #C3ACD0;
        --second2: #F7EFE5;
        --background: #FFFBF5;
    }

html, body, #root {
  height: auto;
}

body {
  margin: 0;
  background-color: #FFFBF5;

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: nomal;
    font-weight: 300;
    src: url('/styles/fonts/NotoSansKR-Light.ttf') format('ttf');
  }
  
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 400;
    src: url('/styles/fonts/NotoSansKR-Regular.ttf') format('ttf');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 500;
    src: url('styles/fonts/NotoSansKR-Medium.ttf') format('ttf');
  }
  
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: bold;
    src: url('/styles/fonts/NotoSansKR-Bold.ttf') format('ttf');
  }
  
  * {
    font-family: 'Noto Sans KR', sans-serif !important;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`

export default GlobalStyle