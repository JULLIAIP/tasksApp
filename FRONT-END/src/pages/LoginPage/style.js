import styled from "styled-components";
import colors from "../../styles/colors";

export const WrapperLogin = styled.main`
  background-color: ${colors.primary};
  color: ${colors.text};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const FormContaier = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50vw;
  gap: 20px;

  > h1 {
    font-weight: 300;
    font-size: 2rem;
    line-height: 42px;
  }
  > span {
    font-style: normal;
    font-weight: 300;
    font-size: 2em;
    line-height: 42px;
    &:hover {
      cursor: pointer;
    }
  }
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 60%;
    min-width: 300px;
    input {
      height: 08vh;
      border: 2px solid white;
      border-radius: 5px;
      box-shadow: 5px 4px 4px rgba(146, 133, 133, 0.25);
    }
    button {
      width: 50%;
      min-width: 150px;
      height: 08vh;
      background-color: ${colors.text};
      font-size: 1em;
    }
  }
`;

export const ImageContainer = styled.section`
  width: 50%;
  display: flex;
  justify-content: center;
  > img {
    width: 60%;

    border-radius: 50%;
    box-shadow: 20px 20px 40px rgba(246, 143, 143, 0.5);
  }
`;
