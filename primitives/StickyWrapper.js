import styled from "styled-components";

import variables from "../constants/variables";

const StickyWrapper = styled.div`
  @media ${variables.screen.medium} {
    min-height: 1500px;

    > * {
      position: sticky;
      top: 0;
      will-change: top;
    }
  }
`;

export default StickyWrapper;
