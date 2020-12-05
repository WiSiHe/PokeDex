import styled, { css } from "styled-components";

import variables from "../constants/variables";

const H3 = styled.h3`
  color: ${variables.colors.text};
  font-size: ${variables.fontSize.h3.mobile};
  font-weight: normal;
  line-height: 1.1;
  letter-spacing: 0.01em;

  @media ${variables.screen.medium} {
    font-size: ${variables.fontSize.h3.desktop};
    line-height: 1.2;
  }

  /* Theme settings */
  ${props =>
    props.theme === "green" &&
    css`
      color: ${variables.colors.basil};
    `};

  ${props =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
`;

export default H3;
