import styled from "styled-components";

import variables from "../constants/variables";

const Spacer = styled.div`
  display: block;
  width: 100%;
  height: 72px;

  @media ${variables.screen.medium} {
    height: 91px;
  }
`;

export default Spacer;
