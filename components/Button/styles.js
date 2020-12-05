import styled, { css } from "styled-components";

import variables from "../../constants/variables";

const Styles = {};

Styles.Button = styled.button`
  display: inline-block;
  height: 48px;
  line-height: 42px;

  border-radius: 50px;
  background: #cc0000;
  box-shadow: 20px 20px 60px #ad0000, -20px -20px 60px #eb0000;

  color: white;
  // font-family: ${variables.typography.fontFamily};
  font-weight: bold;
  // font-size: ${variables.fontSize.regular};
  font-size: 18px;
  padding: 0 ${variables.spacing[5]};
  padding-bottom: 2px; /* To center text vertically */
  letter-spacing: 0.02em;
  text-align: center;
  text-decoration: none;
  appearance: none;

  &:focus & .body--a11y {
    box-shadow: 0 0 0 8px ${variables.colors.pea40} !important;
  }

  /* Modifiers */

  ${(props) =>
    props.outlined &&
    css`
      color: ${variables.colors.black};
      background: ${variables.colors.white};
    `}

  ${(props) =>
    props.faded &&
    css`
      background: ${variables.colors.disabledBg};
      border-color: ${variables.colors.disabledBg};
      color: ${variables.colors.disabledFg};
    `}
    
  ${(props) =>
    props.full &&
    css`
      width: 100%;
    `}
    
  ${(props) =>
    props.fullMobile &&
    css`
      @media ${variables.screen.mediumMax} {
        width: 100%;
      }
    `}

  ${(props) =>
    props.small &&
    css`
      height: 28px;
      line-height: 23px;
      padding: 0 ${variables.spacing[4]};
      padding-bottom: 4px; /* To center text vertically */
      font-size: ${variables.fontSize.small};
    `}
`;

Styles.Loader = styled.span`
  background: red;
`;

Styles.Basket = styled.span`
  position: relative;
  display: inline-block;
  padding: 2px 4px 4px;
  line-height: 1;
  min-width: 22px;
  border: 1px solid white;
  margin-left: ${variables.spacing[4]};
  margin-right: -${variables.spacing[2]};
  margin-bottom: -2px;

  &:before {
    content: "";
    position: absolute;
    top: -4px;
    left: 50%;
    width: 8px;
    height: 4px;
    border: 1px solid white;
    transform: translateX(-50%);
  }
`;

export default Styles;
