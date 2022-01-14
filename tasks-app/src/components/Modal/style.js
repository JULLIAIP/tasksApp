import styled from "styled-components";
import colors from "../../styles/colors";

export const WrapperModal = styled.div`
  width: 60vw;
  height: auto;
  position: absolute;

  top: 20%;
  left: 20%;
  background-color: white;
  border-radius: 10px;
  .button-close {
    position: absolute;
    left: 95%;
    top: -3%;
    color: ${colors.primary};
    font-size: 25px;
    width: 30px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 10px 5px 1px rgb(64 60 67 / 16%);
  }
  .button-save {
    background-color: ${colors.success};
  }
  > form {
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 90%;
    padding: 5%;
    gap: 20px;
  }
`;
export const InputContain = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  input {
    background-color: ${colors.default};
    border: none;
  }
`;
