import styled, { css } from "styled-components";

import variables from "../constants/variables";

const Ul = styled.ul`
  font-size: ${variables.fontSize.regular};
  font-weight: 300;
  letter-spacing: 0.02em;
  list-style: none;

  > li {
    list-style-position: inside;
  }

  /* Modifiers */
  ${props =>
    props.numbered &&
    css`
      list-style: decimal;
    `}

  /* Modifiers */
  ${props =>
    props.bulleted &&
    css`
      list-style: initial;
    `}
`;

export default Ul;
