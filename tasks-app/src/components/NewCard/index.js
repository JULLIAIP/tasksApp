import React from "react";
import {
  Button,
  Input,
  Popover,
  TextField,
  Typography,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { WrapperNewCard } from "./styles";

function NewCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <WrapperNewCard>
      <h1>Novo Cartão</h1>
      <button onClick={handleClick}>
        <AddCircleOutlineIcon />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography variant="h6">Escolha o nome do cartão</Typography>
        <TextField
          name="name"
          type="text"
          title="nome"
          placeholder="Nome do Cartão"
          variant="outlined"
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          title="entrar"
          color="primary"
        >
          Criar
        </Button>
      </Popover>
    </WrapperNewCard>
  );
}
export default NewCard;
