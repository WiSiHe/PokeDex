import styled, { css } from "styled-components";

import variables from "../constants/variables";

const Label = styled.span`
  font-size: ${variables.fontSize.h3.desktop};
  font-weight: 300;
  letter-spacing: 0.02em;

  /* Modifiers */
  ${props =>
    props.small &&
    css`
      font-size: ${variables.fontSize.larger};
      font-weight: normal;
      visibility: visible;
    `}
`;

export default Label;
