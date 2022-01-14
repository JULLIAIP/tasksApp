import styled from "styled-components";
import colors from "../../styles/colors";

export const WrapperNewCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.default};
  border-radius: 10px;
  margin-right: 10px;
  min-width: 300px;
  height: 10vh;
  box-shadow: 0 10px 5px 1px rgb(64 60 67 / 16%);

  > button {
    border: none;
    background-color: transparent;
    color: ${colors.text};
    > svg {
      font-size: 40px;
      background-color: white;
      border-radius: 50%;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
