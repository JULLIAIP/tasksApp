import styled from "styled-components";

export const WrapperHeader = styled.div`
  display: flex;
  width: 100vw;
  height: 20vh;
  justify-content: space-around;
  align-items: center;
  position: fixed;

  > svg {
    &:hover {
      cursor: pointer;
    }
  }
`;
