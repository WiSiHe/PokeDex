import styled from "styled-components";

const Overflower = styled.div`
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Overflower;
