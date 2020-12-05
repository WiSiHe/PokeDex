import styled, { css, keyframes } from "styled-components";

const draw = keyframes`
  0% {
    stroke-dashoffset: 660;
  }
  100% {
    stroke-dashoffset: -660;
  }
`;

const Loader = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /*
   * Variations
   */

  /* Full-page version */
  ${props =>
    props.isFullPage &&
    css`
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.72);
      z-index: 999;
    `};

  /* Fill-screen version */
  ${props =>
    props.isWholeScreen &&
    css`
      position: fixed;
    `};
`;

const LoaderIcon = styled.div`
  & svg {
    width: 80px;
    height: 80px;
    fill: ${props => props.theme.colors.primary};
    stroke-dasharray: 700;
    animation: ${draw} 3s linear infinite;
  }
  & path {
    stroke: white;
    fill: transparent;
    stroke-width: 13px;
  }
`;

export { Loader, LoaderIcon };
