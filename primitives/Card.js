import styled, { css } from "styled-components";

import variables from "../constants/variables";

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e9e9e9;
  padding: ${variables.spacing[4]};

  @media ${variables.screen.medium} {
    padding: ${variables.spacing[7]};
  }

  /* Modifiers */

  ${props =>
    props.noBorder &&
    css`
      border: 0;
    `};

  ${props =>
    props.noBorderMobile &&
    css`
      @media ${variables.screen.mediumMax} {
        border: 0;
      }
    `};

  ${props =>
    props.relative &&
    css`
      position: relative;
    `};

  ${props =>
    props.noPadding &&
    css`
      padding: 0 !important;
    `};

  ${props =>
    props.noPaddingMobile &&
    css`
      @media ${variables.screen.mediumMax} {
        padding: 0;
      }
    `};

  ${props =>
    props.halfPadding &&
    css`
      padding: ${variables.spacing[4]};

      @media ${variables.screen.medium} {
        padding: ${variables.spacing[5]};
      }
    `};

  ${props =>
    props.minHeight &&
    css`
      @media ${variables.screen.medium} {
        min-height: ${props.minHeight};
      }
    `};
`;

export default Card;
