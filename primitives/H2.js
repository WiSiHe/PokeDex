import styled, { css } from "styled-components";

import variables from "../constants/variables";

const H2 = styled.h2`
  color: ${variables.colors.text};
  font-size: ${variables.fontSize.h2.mobile};
  font-weight: normal;
  line-height: 1.25;
  letter-spacing: 0.01em;

  @media ${variables.screen.medium} {
    font-size: ${variables.fontSize.h2.desktop};
    line-height: 1.2;
  }

  /* Theme settings */
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
    props.align &&
    css`
      text-align: ${props.align};
    `}
`;

export default H2;
