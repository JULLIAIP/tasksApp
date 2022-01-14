import AddIcon from "@material-ui/icons/Add";
import { useTasksGlobalContext } from "../../hooks/contextTask";
import Tasks from "../Tasks";

import { TitleContainer, WrapperCard } from "./style";

function Cards({ name }) {
  const { handleSetIsOpen } = useTasksGlobalContext();
  return (
    <WrapperCard>
      <TitleContainer>
        <h1>{name}</h1>
        <button onClick={handleSetIsOpen}>
          <AddIcon />
        </button>
      </TitleContainer>
      <Tasks />
      <Tasks />
    </WrapperCard>
  );
}
export default Cards;
