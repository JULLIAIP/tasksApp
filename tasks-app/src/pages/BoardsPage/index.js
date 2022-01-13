import NewCard from "../../components/NewCard";
import Header from "../../components/Header";
import { WrapperBoards } from "./style";

function BoardsPage() {
  return (
    <WrapperBoards>
      <Header name={"Júllia"} />
      <NewCard />
    </WrapperBoards>
  );
}
export default BoardsPage;
