import styled, { css } from "styled-components";
import variables from "../constants/variables";

const Flex = styled.div`
  display: flex;
  flex-direction: row;

  /* Full-width version */
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
  /* Full-height version */
  ${(props) =>
    props.fullHeight &&
    css`
      height: 100%;
    `};
  /* Align items settings */
  ${(props) =>
    props.align &&
    css`
      align-items: ${props.align};
    `};

  /* Justify content settings */
  ${(props) =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `};

  /* Justify content settings */
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `};

  /* Wrap settings */
  ${(props) =>
    props.wrap &&
    css`
      flex-wrap: wrap;
    `};

  ${(props) =>
    props.responsive &&
    css`
      flex-direction: column;

      @media ${variables.screen.medium} {
        flex-direction: row;
      }
    `};
`;

export default Flex;
