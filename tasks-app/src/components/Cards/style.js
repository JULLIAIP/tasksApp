import styled from "styled-components";
import colors from "../../styles/colors";
import { scrollbarThin } from "../../styles/scroll";

export const WrapperCard = styled.main`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  width: 25%;
  min-width: 350px;
  height: 70vh;
  justify-content: space-around;
  box-shadow: 0 10px 5px 1px rgb(64 60 67 / 16%);
  padding: 2%;
  gap:10px;
  overflow: auto;
  margin-bottom: 20px;
  ${scrollbarThin}
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  border-bottom: 2px solid ${colors.text};
  height: 10vh;
  margin-bottom: 10px;
  > h1 {
    color: ${colors.primary};
  }

  > button {
    border: none;
    background-color: transparent;
    svg {
      font-size: 40px;
      background-color: ${colors.primary};
      border-radius: 50%;
      color: white;
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
`;
