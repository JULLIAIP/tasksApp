import styled from "styled-components";
import colors from "../../styles/colors";

export const WrapperTask = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid ${colors.primary};
  width: 100%;
  height: 30%;
  min-height:200px;
  gap: 2%;
  padding: 3%;
  .top {
    display: flex;
    align-items: center;
  }
  .delete-button {
    top: -15%;
    left: 90%;
    position: relative;
    background-color: transparent;
    border: none;
    svg {
      color: ${colors.default};
    }
  }
`;
export const InputInfo = styled.div`
  display: flex;
  border-radius: 5px;
  background-color: ${colors.default};
  width: 70px;

  > button {
    background-color: transparent;
    border: none;
  }
`;
