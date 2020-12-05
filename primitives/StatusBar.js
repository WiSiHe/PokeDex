import styled, { css } from "styled-components";

import variables from "../constants/variables";

const StatusBar = styled.div`
  color: ${variables.colors.text};
  padding: ${variables.spacing[3]} ${variables.spacing[5]};
  font-size: ${variables.fontSize.regular};
  padding-top: calc(${variables.spacing[3]} - 4px);

  /* Align items settings */
  ${props =>
    props.good &&
    css`
      background: ${variables.colors.pea100};
    `};

  ${props =>
    props.bad &&
    css`
      background: ${variables.colors.tumeric100};
    `};
`;

export default StatusBar;
