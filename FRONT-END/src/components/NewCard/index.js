import React from "react";
import { Button, Popover, TextField, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { WrapperNewCard } from "./styles";
import { Formik } from "formik";
import { useTasksGlobalContext } from "../../hooks/contextTask";

function NewCard() {
  const { onSubmitCard } = useTasksGlobalContext();
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
      <button title="Adcionar" onClick={handleClick}>
        <AddIcon />
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
        <Formik
          onSubmit={onSubmitCard}
          initialValues={{
            name: "",
          }}
          render={({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                name="name"
                type="text"
                title="nome"
                placeholder="Nome do Cartão"
                variant="outlined"
                onChange={handleChange}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                title="entrar"
                color="primary"
                fullWidth
              >
                Criar
              </Button>
            </form>
          )}
        />
      </Popover>
    </WrapperNewCard>
  );
}
export default NewCard;
