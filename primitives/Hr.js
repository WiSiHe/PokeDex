import styled from "styled-components";

import variables from "../constants/variables";

const Hr = styled.hr`
  display: block;
  border: 0;
  margin: 0;
  padding: 0;
  height: 1px;
  background: ${variables.colors.gray40};
`;

export default Hr;
