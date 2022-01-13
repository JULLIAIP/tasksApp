import styled from "styled-components";

export const WrapperHeader = styled.div`
  display: flex;
  width: 100vw;
  height: 120px;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  > svg {
    &:hover {
      cursor: pointer;
    }
  }
`;
