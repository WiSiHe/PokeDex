import { createGlobalStyle } from "styled-components";

import variables from "./constants/variables";

/* Global styles */

const GlobalStyle = createGlobalStyle`
  // @font-face {
  //   font-family: "Ginto Normal";
  //   src: local("Ginto Normal"), url("/fonts/GintoNormal-Regular.woff") format("woff");
  //   font-weight: normal;
  //   font-style: normal;
  //   font-display: swap;
  // }
  // @font-face {
  //   font-family: "Ginto Normal";
  //   src: local("Ginto Normal"), url("/fonts/GintoNormal-Thin.woff") format("woff");
  //   font-weight: 300;
  //   font-style: normal;
  //   font-display: swap;
  // }
  @font-face {
    font-family: "High Tide";
    src: local("High Tide"), url("/fonts/HighTide-Regular.woff") format("woff");
    font-style: normal;
    font-display: swap;
  }

  html {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }



  body {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-family: "Ginto Normal", Helvetica, Arial;
    font-weight: normal;
    // background-color: #CC0000;
    background-color: white;
  }

  /* Prevent scrolling when drawers open */
  body.body--frozen {
    overflow: hidden;
  }

  @media (min-width: 768px) {
    body.body--frozen {
      margin-right: 15px;
    }
  }



  /* Global Focus */
  :focus {
    outline: 0;
  }
  
  /* Accessibility styles (when using keyboard) */
  .body--a11y *:focus {
    outline: 0;
    box-shadow: 0 0 0 8px ${variables.colors.pea40};
  }

  /* Global prefill styling for webkit (remove yellow fill) */
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-text-fill-color: black;
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }

  h1,
  h2,
  h3,
  h4,
  strong,
  blockquote,
  p,
  a {
    margin: 0;
    font-weight: normal;
  }

  p {
    font-size: ${variables.fontSize.regular};
    line-height: 1.43;
    font-weight: 300;
  }

  strong {
    letter-spacing: 0.02em;
  }

  /* Global general styles */
  button {
    border: 0;
    padding: 0;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    background-color: transparent;
  }

  a {
    cursor: pointer;
    color: currentColor;
  }

  .link {
    cursor: pointer;
    color: currentColor;
    font-family: ${variables.typography.fontFamily};
  }

  .link-with-underline {
    cursor: pointer;
    color: currentColor;
    text-decoration: underline;
    font-family: ${variables.typography.fontFamily};

    &:focus {
      box-shadow: 0 0 0 8px ${variables.colors.pea40};
    }
  }

  ul, li {
    margin: 0;
    padding: 0;
  }

  /* Text selection */
  ::selection {
    background: rgba(119, 152, 2, 0.4);
  }
  /* Helpers */
  .screenReaders {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .hidden {
    display: none;
  }

  .blur-img {
		filter: blur(5px);
		transition: filter 400ms;
  }

  .blur-img.lazyloaded {
		filter: blur(0);
	}
`;

export default GlobalStyle;
