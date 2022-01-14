import NewCard from "../../components/NewCard";
import Header from "../../components/Header";
import { CardsContain, WrapperBoards } from "./style";
import { useTasksGlobalContext } from "../../hooks/contextTask";
import Cards from "../../components/Cards";
import ModalNewTask from "../../components/Modal";

function BoardsPage() {
  const { listCards } = useTasksGlobalContext();
  console.log(listCards);
  return (
    <WrapperBoards>
      <Header name={"Júllia"} />
      <CardsContain>
        {listCards?.map((item) => (
          <Cards name={item} />
        ))}
        <NewCard />
      </CardsContain>
      <ModalNewTask />
    </WrapperBoards>
  );
}
export default BoardsPage;
