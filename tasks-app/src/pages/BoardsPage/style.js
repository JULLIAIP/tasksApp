import styled from "styled-components";
import colors from "../../styles/colors";
import { scrollbarThin } from "../../styles/scroll";

export const WrapperBoards = styled.main`
  background-color: ${colors.primary};
  color: ${colors.text};
  min-width: 100vw;
  width: auto;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  overflow: auto;
  ${scrollbarThin}
`;
export const CardsContain = styled.section`
  display: flex;
  justify-content: flex-start;
  height: auto;
  min-height: 80vh;
  min-width: 100vw;
  width: auto;
  gap: 2%;
  margin-top: 20vh;
  padding: 2%;
`;
