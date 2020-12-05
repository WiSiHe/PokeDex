import styled, { css, keyframes } from "styled-components";

import variables from "../../constants/variables";

const Styles = {};

const imageLeftAnim = keyframes`
  from {
    transform: translateX(-5px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const imageRightAnim = keyframes`
  from {
    transform: translateX(5px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

Styles.Outer = styled.div`
  width: 100%;
  padding: 0 ${variables.spacing[4]};

  @media ${variables.screen.medium} {
    padding: 0 ${variables.spacing[6]};
  }

  @media ${variables.screen.large} {
    padding: 0 ${variables.spacing[7]};
  }

  /* Modifiers */
  ${(props) =>
    props.noPaddingMobile &&
    css`
      @media (max-width: 768px) {
        padding: 0;
      }
    `}

  ${(props) =>
    props.theme === "white" &&
    css`
      background: ${variables.colors.white};
    `}

  ${(props) =>
    props.theme === "light" &&
    css`
      background: #fafafa;
      overflow: auto;
    `}

  ${(props) =>
    props.theme === "gray" &&
    css`
      background: ${variables.colors.disabledBg};
      overflow: auto;
    `}


  ${(props) =>
    props.preventCollapse &&
    css`
      overflow: auto;
    `}

  ${(props) =>
    props.showOverflow &&
    css`
      overflow: visible;
    `}

  ${(props) =>
    props.fillScreenHeight &&
    css`
      min-height: calc(100vh - 61px);
    `}
`;

Styles.Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: ${variables.general.maxContentWidth};
  margin: 0 auto;

  ${(props) =>
    props.maxWidth === "narrow" &&
    css`
      max-width: 1080px;
    `}

  ${(props) =>
    props.maxWidth === "text" &&
    css`
      max-width: 650px;
    `}
`;

Styles.ImageLeft = styled.div`
  position: absolute;
  top: 120px;
  left: 0;
  height: 95px;
  width: 49px;
  background-size: contain;
  animation: ${imageLeftAnim} 2s ease;

  @media (min-width: 1000px) {
    top: 30px;
    height: 252px;
    width: 129px;

    ${(props) =>
      props.isMiddle &&
      css`
        top: 30%;
      `}
  }

  @media (min-width: 1440px) {
    height: 331px;
    width: 169px;
  }
`;

Styles.ImageRight = styled.div`
  position: absolute;
  top: 120px;
  right: 0;
  height: 56px;
  width: 44px;
  background-size: contain;
  animation: ${imageRightAnim} 2s ease;

  @media (min-width: 1000px) {
    top: 30px;
    height: 165px;
    width: 123px;

    ${(props) =>
      props.isMiddle &&
      css`
        top: 30%;
      `}
  }

  @media (min-width: 1440px) {
    height: 196px;
    width: 153px;
  }
`;

export default Styles;
