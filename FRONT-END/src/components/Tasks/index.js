import { Checkbox } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PeopleIcon from "@material-ui/icons/People";
import DeleteIcon from "@material-ui/icons/Delete";
import { InputInfo, WrapperTask } from "./styles";

function Tasks() {
  return (
    <WrapperTask>
      <div className="top">
        <h4>Title</h4>
        <Checkbox />
      </div>
      <p>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
      </p>
      <InputInfo>
        <AccessTimeIcon />
        <button>1:00</button>
      </InputInfo>
      <InputInfo>
        <PeopleIcon />
        <button>1</button>
      </InputInfo>
      <button className="delete-button">
        <DeleteIcon />
      </button>
    </WrapperTask>
  );
}
export default Tasks;
