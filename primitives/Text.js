import styled, { css } from "styled-components";

import variables from "../constants/variables";

const Text = styled.span`
  ${props =>
    props.upperCase &&
    css`
      text-transform: uppercase;
    `}

  ${props =>
    props.strikeThrough &&
    css`
      text-decoration: line-through;
    `}

  ${props =>
    props.green &&
    css`
      color: ${variables.colors.pea};
    `}

  ${props =>
    props.gray &&
    css`
      color: #bebebe;
    `}

  ${props =>
    props.red &&
    css`
      color: ${variables.colors.tumeric};
    `}

  ${props =>
    props.small &&
    css`
      font-size: ${variables.fontSize.small};
    `}

  ${props =>
    props.regular &&
    css`
      font-size: ${variables.fontSize.regular};
    `}

  ${props =>
    props.large &&
    css`
      font-size: 42px;
      line-height: 26px;
    `}

  ${props =>
    props.bold &&
    css`
      font-weight: bold;
    `}

  ${props =>
    props.normal &&
    css`
      font-weight: normal;
    `}

  ${props =>
    props.thin &&
    css`
      font-weight: 300;
    `}

  ${props =>
    props.limitWidth &&
    css`
      display: inline-block;
      max-width: 650px;
    `}

  ${props =>
    props.altFont &&
    css`
      font-family: ${variables.typography.fontFamilyAlt};
    `}
`;

export default Text;
