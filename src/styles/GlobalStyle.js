import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
	
	// 전역스타일
	* {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, Helvetica, Arial, "hiragino kaku gothic pro", meiryo, "Microsoft YaHei", "ms pgothic", "Apple SD Gothic Neo", "Nanum Gothic", "Malgun Gothic", sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333333;
  }

  a, a:active, a:hover, a:visited{
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ul, ol {
    list-style: none;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
