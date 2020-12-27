import styled, { css } from "styled-components";

import variables from "../../constants/variables";

const Styles = {};

Styles.Wrapper = styled.div`
  position: relative;
  display: inline-block;

  ${props =>
    props.full &&
    css`
      width: 100%;
    `}
`;

Styles.Shadow = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  opacity: 0;
  z-index: -1;
  transition: all 0.2s ease;
`;
Styles.Outer = styled.div`
  position: relative;
  display: inline-block;
  background: white;
  transition: all 0.2s ease;

  &:hover ~ ${Styles.Shadow} {
    opacity: 1;
  }

  ${props =>
    props.full &&
    css`
      width: 100%;
    `}
`;

Styles.Arrow = styled.div`
  position: absolute;
  right: ${variables.spacing[4]};
  top: 44%;
  transform: translateY(-50%);
  line-height: 1;
`;

Styles.Label = styled.label`
  display: inline-block;
  letter-spacing: 0.02em;
  margin-bottom: ${variables.spacing[3]};
  font-size: 14px;
`;

Styles.Select = styled.select`
  position: relative;
  display: block;
  width: 100%;
  min-width: 150px;
  font-size: ${variables.fontSize.large};
  font-family: ${variables.typography.fontFamily};
  background-color: transparent;
  color: ${variables.colors.black};
  padding: 0 ${variables.spacing[7]} 3px ${variables.spacing[5]};
  height: 44px;
  border: 1px solid ${variables.colors.black};
  cursor: pointer;
  appearance: none;

  &::-webkit-input-placeholder {
    color: #919191;
  }
`;

export default Styles;
