import styled, { css } from "styled-components";

const Styles = {};

Styles.Wrapper = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  z-index: 5;
  display: inline-block;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  height: 60px;
  background-color: white;
  text-transform: uppercase;
  padding: 0px 16px;
`;

Styles.Link = styled.div`
  color: black;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.2;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: #cc0000;
      color: white;
    `}
`;

export default Styles;
