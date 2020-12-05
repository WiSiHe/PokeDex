import styled, { css } from "styled-components";

import variables from "../constants/variables";

const H1 = styled.h1`
  color: ${variables.colors.text};
  font-size: ${variables.fontSize.h1.mobile};
  font-weight: normal;
  line-height: 1.063;
  letter-spacing: 0.01em;

  @media ${variables.screen.medium} {
    font-size: ${variables.fontSize.h1.desktop};
  }

  /* Theme and size settings */
  ${props =>
    props.theme === "green" &&
    css`
      color: ${variables.colors.basil};
    `};

  ${props =>
    props.theme === "white" &&
    css`
      color: ${variables.colors.white};
    `};

  ${props =>
    props.small &&
    css`
      @media ${variables.screen.medium} {
        font-size: ${variables.fontSize.h1.mobile};
      }
    `};

  ${props =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
`;

export default H1;
