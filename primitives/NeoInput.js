import styled from "styled-components";

const NeoInput = styled.input`
  font-size: 18px;
  padding: 10px 25px;
  color: white;

  border-radius: 50px;
  background: #cc0000;
  //   background: white;
  box-shadow: inset 20px 20px 60px #ad0000, inset -20px -20px 60px #eb0000;
  border: none;

  ::placeholder {
    color: palevioletred;
  }
`;

export default NeoInput;
