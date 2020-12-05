import styled, { css } from "styled-components";

import variables from "../constants/variables";
import getWidth from "../helpers/getWidth";

const GridItem = styled.div`
  display: inline-block;
  width: 100%;
  padding-left: ${variables.spacing[2]};
  vertical-align: top;
  box-sizing: border-box;
  position: relative;

  @media ${variables.screen.medium} {
    padding-left: ${variables.spacing[4]};
  }

  @media ${variables.screen.large} {
    padding-left: ${variables.spacing[5]};
  }

  /*
   * Custom gutters
   */

  ${props =>
    props.gutter === "small" &&
    css`
      @media ${variables.screen.medium} {
        padding-left: ${variables.spacing[2]} !important;
      }
    `}

  ${props =>
    props.gutter === "medium" &&
    css`
      @media ${variables.screen.medium} {
        padding-left: ${variables.spacing[4]} !important;
      }
    `}

  ${props =>
    props.gutter === "large" &&
    css`
      @media ${variables.screen.medium} {
        padding-left: ${variables.spacing[5]} !important;
      }
    `}

    ${props =>
      props.gutterMobile === "small" &&
      css`
        @media ${variables.screen.base} {
          padding-left: ${variables.spacing[2]} !important;
        }
      `}
  
    ${props =>
      props.gutterMobile === "medium" &&
      css`
        @media ${variables.screen.base} {
          padding-left: ${variables.spacing[4]} !important;
        }
      `}
  
    ${props =>
      props.gutterMobile === "large" &&
      css`
        @media ${variables.screen.base} {
          padding-left: ${variables.spacing[5]} !important;
        }
      `}

  /*
   * Item widths
   */

  /* Base width */
  ${props =>
    props.base &&
    css`
      width: ${getWidth(props.base)};
    `};

  /* Small width */
  ${props =>
    props.small &&
    css`
      @media ${variables.screen.small} {
        width: ${getWidth(props.small)};
      }
    `};

  /* Medium width */
  ${props =>
    props.medium &&
    css`
      @media ${variables.screen.medium} {
        width: ${getWidth(props.medium)};
      }
    `};

  /* Large width */
  ${props =>
    props.large &&
    css`
      @media ${variables.screen.large} {
        width: ${getWidth(props.large)};
      }
    `};

  /*
   * Item push settings
   */

  /* Base push */
  ${props =>
    props.basePush &&
    css`
      position: relative;
      left: ${getWidth(props.basePush)};
    `};

  /* Small push */
  ${props =>
    props.smallPush &&
    css`
      @media ${variables.screen.small} {
        position: relative;
        left: ${getWidth(props.smallPush)};
      }
    `};

  /* Medium push */
  ${props =>
    props.mediumPush &&
    css`
      @media ${variables.screen.medium} {
        position: relative;
        left: ${getWidth(props.mediumPush)};
      }
    `};

  /* Large push */
  ${props =>
    props.largePush &&
    css`
      @media ${variables.screen.large} {
        position: relative;
        left: ${getWidth(props.largePush)};
      }
    `};

  /*
   * Item visibility settings
   */

  /* Small hide */
  ${props =>
    props.smallHide &&
    css`
      @media ${variables.screen.small} {
        display: none;
      }
    `};

  /* Medium hide */
  ${props =>
    props.mediumHide &&
    css`
      @media ${variables.screen.medium} {
        display: none;
      }
    `};

  /* Large hide */
  ${props =>
    props.largeHide &&
    css`
      @media ${variables.screen.large} {
        display: none;
      }
    `};

  ${props =>
    props.baseShow &&
    css`
      display: none;

      @media ${variables.screen.small} {
        display: inline-block;
      }
    `};

  /* Small push */
  ${props =>
    props.smallShow &&
    css`
      display: none;
      @media ${variables.screen.small} {
        display: inline-block;
      }
    `};

  /* Medium push */
  ${props =>
    props.mediumShow &&
    css`
      display: none;
      @media ${variables.screen.medium} {
        display: inline-block;
      }
    `};

  /* Large push */
  ${props =>
    props.largeShow &&
    css`
      display: none;
      @media ${variables.screen.large} {
        display: inline-block;
      }
    `};
`;

export default GridItem;
