import styled from "styled-components";

import variables from "../constants/variables";

const StickyWrapper = styled.div`
  position: sticky;
  top: 60px;
  left: 0px;
  right: 0px;
  will-change: top;
  padding: 8px;
  background: white;
  z-index: 10;
`;

export default StickyWrapper;
