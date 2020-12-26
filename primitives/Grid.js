import styled, { css } from "styled-components";

import variables from "../constants/variables";

const Grid = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  // margin-left: -${variables.spacing[2]};

  // @media ${variables.screen.medium} {
  //   margin-left: -${variables.spacing[4]};
  // }

  // @media ${variables.screen.large} {
  //   margin-left: -${variables.spacing[5]};
  // }
  // overflow: hidden;

  /* Reversed version */
  ${(props) =>
    props.rev &&
    css`
      direction: rtl;
      text-align: left;

      > * {
        direction: ltr !important;
        text-align: left !important;
      }
    `};

  ${(props) =>
    props.revMobile &&
    css`
      @media ${variables.screen.mediumMax} {
        display: flex;
        flex-direction: column-reverse;
      }
    `}

  /* Full version */
  ${(props) =>
    props.full &&
    css`
      margin-left: 0;

      > * {
        padding-left: 0 !important;
      }
    `};

  /* Vertical align: middle version */
  ${(props) =>
    props.middle &&
    css`
      > * {
        vertical-align: middle !important;
      }
    `};

  /* Vertical align: bottom version */
  ${(props) =>
    props.bottom &&
    css`
      > * {
        vertical-align: bottom !important;
      }
    `};

  /* Centered version */
  ${(props) =>
    props.center &&
    css`
      text-align: center;

      > * {
        text-align: left !important;
      }
    `};

  /* full height */
  ${(props) =>
    props.fullHeight &&
    css`
      height: 100%;
    `};

  /* full width */
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
`;

export default Grid;
