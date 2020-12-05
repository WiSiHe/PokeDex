import styled, { css } from "styled-components";
import config from "../constants/variables";

/**
 *
 * Block
 *
 * Adds global spacing to contents, use this everywhere you need margin or
 * padding instead of adding padding to elements (where you can)
 *
 * All Blocks will have no left/right padding by default unless 'site' is used
 *
 * Usage: <Block top={1} bottom={1}>...</Block>
 *
 */
const { spacing, screen } = config;

const Block = styled.div`
  /* Left margin */

  ${props =>
    props.leftMobile &&
    css`
      @media ${screen.mediumMax} {
        margin-left: ${spacing[props.leftMobile]};
      }
    `};

  /* Right margin */
  ${props =>
    props.rightMobile &&
    css`
      @media ${screen.mediumMax} {
        margin-right: ${spacing[props.rightMobile]};
      }
    `};

  /* Top padding */
  ${props =>
    props.topMobile &&
    css`
      @media ${screen.mediumMax} {
        margin-top: ${spacing[props.topMobile]};
      }
    `};

  /* Bottom padding */
  ${props =>
    props.bottomMobile &&
    css`
      @media ${screen.mediumMax} {
        margin-bottom: ${spacing[props.bottomMobile]};
      }
    `};

  ${props =>
    props.left &&
    css`
      margin-left: ${spacing[props.left]};
    `};

  /* Right margin */
  ${props =>
    props.right &&
    css`
      margin-right: ${spacing[props.right]};
    `};

  /* Top padding */
  ${props =>
    props.top &&
    css`
      margin-top: ${spacing[props.top]};
    `};

  /* Bottom padding */
  ${props =>
    props.bottom &&
    css`
      margin-bottom: ${spacing[props.bottom]};
    `};

  /* Text align settings */
  ${props =>
    props.align &&
    css`
      text-align: ${props.align};
    `};

  /* Width override */
  ${props =>
    props.full &&
    css`
      width: 100%;
    `};

  /* Width override */
  ${props =>
    props.hideOverflow &&
    css`
      overflow: hidden;
    `};

  /*
   * Item visibility settings
   */

  /* Small hide */
  ${props =>
    props.smallHide &&
    css`
      @media ${screen.small} {
        display: none;
      }
    `};

  /* Medium hide */
  ${props =>
    props.mediumHide &&
    css`
      @media ${screen.medium} {
        display: none;
      }
    `};

  /* Large hide */
  ${props =>
    props.largeHide &&
    css`
      @media ${screen.large} {
        display: none;
      }
    `};

  ${props =>
    props.baseShow &&
    css`
      display: none;

      @media ${screen.small} {
        display: inline-block;
      }
    `};

  /* Small push */
  ${props =>
    props.smallShow &&
    css`
      display: none;
      @media ${screen.small} {
        display: inline-block;
      }
    `};

  /* Medium push */
  ${props =>
    props.mediumShow &&
    css`
      display: none;
      @media ${screen.medium} {
        display: inline-block;
      }
    `};

  /* Large push */
  ${props =>
    props.largeShow &&
    css`
      display: none;
      @media ${screen.large} {
        display: inline-block;
      }
    `};

  /* Flex behaviour */
  ${props =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}
`;

const InlineBlock = Block.withComponent("span");

export { Block, InlineBlock };
export default Block;
