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
`;

Styles.Link = styled.div`
  color: black;
  padding: 16px;
  border-radius: 5px;

  ${(props) =>
    props.active &&
    css`
      background-color: #cc0000;
      // color: #cc0000;
    `}
`;

export default Styles;
