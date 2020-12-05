import styled from "styled-components";

const NeoInput = styled.input`
  font-size: 18px;
  padding: 10px 25px;

  border-radius: 50px;
  background: #ffffff;
  box-shadow: inset 20px 20px 60px #d9d9d9, inset -20px -20px 60px #ffffff;
  border: none;

  ::placeholder {
    color: palevioletred;
  }
`;

export default NeoInput;
