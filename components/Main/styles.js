import styled, { css } from "styled-components";

const Styles = {};

Styles.Main = styled.main`
  min-height: calc(100vh - calc(61px + 270px));
  padding-top: 60px;

  ${(props) =>
    props.hideOverflow &&
    css`
      overflow: hidden;
    `};
`;

export default Styles;
